import { Container } from 'components/Container'
import React from 'react';
import Heading from '../../components/Heading'
import ProfileMenu, { ProfileMenuProps } from '../../components/ProfileMenu';
import Base from '../../templates/Base'
import * as S from './styles';
import { useRouter } from 'next/router';

export type ProfileTemplateProps = {
  children: React.ReactNode;
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { pathname } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor='secondary'>My Profile</Heading>

        <S.Main>
          <ProfileMenu activeLink={(pathname as "/profile/me" | "/profile/cards" | "/profile/orders")} />
          <S.Content>
            {children}
          </S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
