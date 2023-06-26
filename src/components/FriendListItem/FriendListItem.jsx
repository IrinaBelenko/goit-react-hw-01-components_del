import {
  FriendItem,
  Avatar,
  Name,
  GreenCircle,
  RedCircle,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? <GreenCircle /> : <RedCircle />}
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
