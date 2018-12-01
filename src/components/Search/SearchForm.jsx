import React, { Component } from 'react';

import Form from 'react-bootstrap/lib/Form'

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onQueryChange(e.target.value);
  }

  render() {
    let { query } = this.props;

    return (
      <Form>
        <Form.Group>
          <Form.Label srOnly={true}>Filter</Form.Label>
          <Form.Control
            type="text"
            placeholder="Refine results"
            value={query}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchForm;
