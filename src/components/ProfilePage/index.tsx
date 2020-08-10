import React from 'react';

import Feed from '../Feed';


import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img alt="" src="https://avatars1.githubusercontent.com/u/55204249?s=460&u=92966875ec05c170f3d4c66b1c8f6ac51f6a1496&v=4" />
        </Avatar>
      </Banner>
      <ProfileData> 
      <EditButton outlined>Editar Perfil</EditButton>
        <h1>Michel de Jesus</h1>
        <h2>@michel</h2>

        <p>
          Procurando por trabalho remoto
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