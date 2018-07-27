import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from 'actions/index';

function mapStateToProps({ books }) {
  return { books };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item"
      >
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
