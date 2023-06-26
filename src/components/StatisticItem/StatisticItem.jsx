import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox>
      <StatisticText>{label}</StatisticText>
      <StatisticCounter>{percentage}%</StatisticCounter>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
