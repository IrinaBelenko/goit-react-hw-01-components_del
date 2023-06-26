import { Tr, Td } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
