import React from 'react';

export default class VedioPreview extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const books = this.props.bookListToShow
    const updateFunction = this.props.updateInfo
    //console.log('in book preview list', books, updateFunction)

    const bookDomList = books.map( (book) => {
      return <BookPreview key={book.title} bookDetails={book} updateInfo={updateFunction}/>
    })
    //console.log(bookDomList)
    return (
      <div>
        {bookDomList}
      </div>
    );
  }
}