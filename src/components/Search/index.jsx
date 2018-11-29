import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React, { Component } from 'react'

import {
  faBroadcastTower,
} from '@fortawesome/free-solid-svg-icons'

import './style.scss'

library.add(
  faBroadcastTower,
)

class Search extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label for="query" className="sr-only">Search</label>
          <input
            placeholder="Search for..."
            for="query"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            className="form-control"
          />
          <p>{this.state.query}</p>
        </div>
      </form>
    )
  }
}

export default Search
