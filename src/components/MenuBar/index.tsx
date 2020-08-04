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
  ProfileIcon
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
    </Container>
  );
}

export default MenuBar;