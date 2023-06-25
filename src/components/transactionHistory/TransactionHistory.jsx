import PropTypes from 'prop-types';
import { BaseTable, THead, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>
    </BaseTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
