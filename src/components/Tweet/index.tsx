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
        <Avatar />
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