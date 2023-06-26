import { BaseTable, THead, Th } from './TransactionHistory.styled';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            number={index + 1}
          />
        ))}
      </tbody>
    </BaseTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
