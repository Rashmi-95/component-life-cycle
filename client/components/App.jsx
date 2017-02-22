import React from 'react';
import bookDetails from '../bookDetails.js';
import BookPreviewList from './BookPreviewList';
import Book from './Book';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: { author: '', title: '', src: '', description: '' },
      filterBooks: bookDetails
    }
  }

  filterBooks(termToSearch) {
    console.log(termToSearch)
  }

  updateBook(bookToShow) {
    console.log(bookToShow)
    this.setState({ currentState, bookToShow })
  }

  render() {
    return (
      <div>
        <h1>Book Library</h1>
        <div>
          <input type="search" placeholder="Enter to search" onChange={this.filterBooks.bind(this, this.value)} />
        </div>
        <BookPreviewList />
        <Book />
      </div>
    );
  }
}
