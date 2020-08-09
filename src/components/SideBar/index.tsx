import React from 'react';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <Body>
        <p>{'Lorem ispumdolor sit amet. '.repeat(90)}</p>
      </Body>

    </Container>

  );
}

export default SideBar;