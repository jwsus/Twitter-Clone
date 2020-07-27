import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton,
  Feed
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData> 
      <EditButton outlined>Editar Perfil</EditButton>
        <h1>Michel de Jesus</h1>
        <h2>@michel</h2>

        <p>
          Developer at <a href="https://www.google.com">Google</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ponta Grossa, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 10 de agosto de 1997
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>94 </strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>
      <Feed />
    </Container>
  )
      }
export default ProfilePage;