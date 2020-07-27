import React from 'react';

import { Container, Tab, TabSub, Tweets, Info } from './styles';

import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Info>
        <TabSub >Tweets</TabSub>
        <Tab> Tweets e Respostas</Tab>
        <Tab> Midia</Tab>
        <Tab> Curtidas</Tab>
      </Info>
      

      <Tweets >
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;