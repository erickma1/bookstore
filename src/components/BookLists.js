import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBooks } from '../redux/books/booksSlice';

const BooksList = ({ bookItem }) => {
  const dispatch = useDispatch();
  const removeBook = (id) => {
    dispatch(delBooks(id));
  };
  return (
    <li>
      <h1>{bookItem.title}</h1>
      <h3>{bookItem.author}</h3>
      <button type="button" onClick={() => removeBook(bookItem.item_id)}>
        Delete
      </button>
    </li>
  );
};

BooksList.propTypes = {
  bookItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default BooksList;
