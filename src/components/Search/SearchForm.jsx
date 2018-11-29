import React, { Component } from "react"

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onQueryChange(e.target.value);
  }

  render() {
    const { query } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="query" className="sr-only">Filter</label>
          <input className="form-control"
            placeholder="Refine results"
            value={ query }
            onChange={ this.handleChange } />
        </div>
      </form>
    )
  }
}

export default SearchForm
