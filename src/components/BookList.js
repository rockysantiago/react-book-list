import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ books }) {
  return { books };
}

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title} className="list-group-item">
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookList);
