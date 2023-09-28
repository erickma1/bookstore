import PropTypes from 'prop-types';
import BooksLists from './BookLists';

const BookItems = ({ bookProps }) => (
  <div className="bookItems">
    <ul>
      <BooksLists key={bookProps.id} bookItem={bookProps} />
    </ul>
  </div>
);

BookItems.propTypes = {
  bookProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItems;
