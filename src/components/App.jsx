import React from 'react';
import { Profile } from './profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </>
  );
};

{
  /* <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} /> */
}
