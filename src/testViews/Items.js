import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render a list of items
 *
 * @param {Object} props - List of items
 */
function Items(props) {
const { items = []} = props;
  // A single item in the list, render a span.
  if (items.length === 1) {
    return <span className="empty-message">{items[0]}</span>;
  }

  // Multiple items on the list, render a list.
  if (items.length > 1) {
    return (
      <ul>
        {items.map(item => <li className="empty-message" key={item}>{item}</li>)}
      </ul>
    );
  }

  // No items on the list, render an empty message.
  return <span className="empty-message">No items in list</span>;
}

Items.propTypes = {
  items: PropTypes.array,
};

Items.defaultProps = {
  items: []
};

export default Items;