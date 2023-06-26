import { FriendListItem } from 'components';
import { LeaderBoard, LeaderBoardProfiles } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <LeaderBoard>
      <LeaderBoardProfiles>
        {friends.map(({ id, name, avatar, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
