import React from 'react';

import Button from '../Button';

import { 
  Container, 
  Topside, 
  Logo,
  MenuButtom,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  Profiledata,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButtom>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtom>

        <MenuButtom>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtom>
        
        <MenuButtom>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtom>

        <MenuButtom>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtom>

        <MenuButtom>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButtom>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
      <Botside>   
      <Avatar >
        <img alt="" src="https://avatars1.githubusercontent.com/u/55204249?s=460&u=92966875ec05c170f3d4c66b1c8f6ac51f6a1496&v=4" />
      </Avatar>
        <Profiledata>
          <strong>Michel</strong>
          <span>@michel</span>
        </Profiledata>
        <ExitIcon/>
      </Botside>
    </Container>
  );
}

export default MenuBar;
