import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const Date = ({ dateString, context }) => {
  try {
    const rawDate = parseISO(dateString);
    let date;
    switch (context) {
      case 'card':
        date = format(rawDate, 'yyyy');
        break;
      case 'description':
        date = format(rawDate, 'LLL do, yyyy');
        break;
      default:
        return '';
    }
    return <time dateTime={dateString}>{date}</time>;
  } catch (err) {
    console.log(`Caught error when parsing date: ${dateString}`, err.message);
    return '';
  }
};

Date.propTypes = {
  dateString: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default Date;
