import React from 'react';

import StickBox from 'react-sticky-box';

import List from '../List';

import News from '../News';

import FollowSuggestion from '../FollowSuggestion';

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
      <StickBox>
        <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Michel de Jesus"
              nickname="@michel"
            />,
            <FollowSuggestion
              name="Michel de Jesus"
              nickname="@michel"
            />,
            <FollowSuggestion
              name="Michel de Jesus"
              nickname="@michel"
            />
          ]}
        />

        <List 
          title="Talvez você curta"
          elements={[
            <News/>,
            <News/>,
            <News/>
          ]}
        />

        <List 
          title="Talvez você curta"
          elements={[
            <News/>,
            <News/>,
            <News/>
          ]}
        />

        </Body>
      </StickBox>
    </Container>

  );
}

export default SideBar;