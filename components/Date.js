import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const Date = ({ dateString, context }) => {
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
      return 'XXXX';
  }

  return <time dateTime={dateString}>{date}</time>;
};

Date.propTypes = {
  dateString: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default Date;
