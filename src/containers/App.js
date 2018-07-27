import React, { Component } from 'react';
import BookDetail from 'containers/BookDetail';
import BookList from 'containers/BookList';

class App extends Component {
  render() {
    return (
      <div>
        <BookDetail />
        <BookList />
      </div>
    );
  }
}

export default App;
