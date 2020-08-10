import React from 'react';

import { Container, Avatar, Info, FollowButtom } from './styles';

interface Props {
  name: string;
  nickname: string;
  img: string;
}

const FollowSugestion: React.FC<Props> = ({
  name,
  nickname, 
  img
}) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img src={img} />
        </Avatar>
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButtom outlined> Seguir </FollowButtom>
    </Container>
  );
}

export default FollowSugestion;