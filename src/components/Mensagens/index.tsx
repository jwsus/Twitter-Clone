import React from 'react';

import { 
  Container,
  Header,
  Icons,
  Message,
  Arrow,
  Body, 
  classe
 } from './styles';


const showMessage = () => {
  
}

const Mensagens: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>Mensagens</span>
        <Icons>
          {/* <Message /> */}
          <Arrow onClick={showMessage}/>
        </Icons>
      </Header>
      <Body >

      </Body>
    </Container>
  );
}

export default Mensagens;