import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Form from 'react-bootstrap/lib/Form';

class SearchForm extends Component {
  static defaultProps = {
    onQueryChange: null,
    query: null,
  }

  static propTypes = {
    onQueryChange: PropTypes.func,
    query: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const { onQueryChange } = this.props;

    onQueryChange(value);
  }

  render() {
    const { query } = this.props;

    return (
      <Form>
        <Form.Group>
          <Form.Label srOnly>Filter</Form.Label>
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
