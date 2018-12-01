"use strict"

const path = require(`path`);

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions

  // Let’s set up some string consts to use thoroughout the following.
  // MDN > JavaScript reference > Statements and declarations
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // Maybe we usually redirect to page 2, with trailing slash.
  const rootPath = '/'

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allTransmitterListing20110702Json {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allTransmitterListing20110702Json.edges.forEach(({ node }) => {
      createPage({
        path: `transmitters/${node.id}`,
        component: path.resolve(`./src/templates/transmitter.jsx`),
        context: {
          transmitterID: node.id
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
}
