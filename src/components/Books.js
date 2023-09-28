import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksItem from './BookItems';
import BookForm from './Form';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="container">
      {books.map((book) => (
        <BooksItem key={book.id} bookProps={book} />
      ))}
      <BookForm />
    </div>
  );
};

export default Books;
