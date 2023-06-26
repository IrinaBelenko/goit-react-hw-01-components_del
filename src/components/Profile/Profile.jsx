import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  UserBox,
  UserInfo,
  StatText,
  StatValue,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={avatar} alt={username} />
      </CardHeader>
      <CardBody>
        <CardTitle>{username}</CardTitle>
        <CardText>{tag}</CardText>
        <CardText>{location}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <UserInfo>
            <StatText>Followers</StatText>
            <StatValue>{stats.followers}</StatValue>
          </UserInfo>
          <UserInfo>
            <StatText>Views</StatText>
            <StatValue>{stats.views}</StatValue>
          </UserInfo>
          <UserInfo>
            <StatText>Likes</StatText>
            <StatValue>{stats.likes}</StatValue>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
