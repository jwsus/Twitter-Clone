import React from 'react';

import { Container, Avatar, Info, FollowButtom } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<Props> = ({
  name,
  nickname
}) => {
  return (
    <Container>
      <div>
        <Avatar />
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