import React from 'react';

import { 
  Container, 
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description, 
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você  retweetou 
      </Retweeted>

      <Body>
        <Avatar>
          <img src="https://avatars1.githubusercontent.com/u/55204249?s=460&u=92966875ec05c170f3d4c66b1c8f6ac51f6a1496&v=4"/>
        </Avatar>
        <Content>
          <Header>
            <strong>Michel</strong>
            <span>@micheldejesus</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              1
            </Status>
            <Status>
              <RetweetIcon />
              2
            </Status>
            <Status>
              <LikeIcon />
              18
            </Status>
          </Icons>
        </Content>
      </Body>
      </Container>
  );
}

export default Tweet;