import { PageProps } from 'gatsby';
import React from 'react';

import * as S from './index.styles';
import Profile from '../../components/Profile';
import GroundLayout from '../../components/GroundLayout';

const ProfilePage = ({
  location,
}: PageProps<object, object, { onloadAnimation?: string }, object>) => {
  return (
    <GroundLayout onloadAnimation={location.state.onloadAnimation}>
      <Profile />
    </GroundLayout>
  );
};

export default ProfilePage;
