import React from "react"

import Layout from "../components/layout"
import Search from "../components/Search"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>FreqFinder</h1>
          <Search />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
