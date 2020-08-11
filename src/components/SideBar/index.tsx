import React from 'react';

import StickBox from 'react-sticky-box';

import List from '../List';

import News from '../News';

import Mensagens from '../Mensagens';

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
              name="Junior"
              nickname="@Junior"
              img="https://avatars0.githubusercontent.com/u/38589846?s=460&u=5b528525a86e010dd0fb7c3db967567cec0442c9&v=4"
            />,
            <FollowSuggestion
              name="João Victor"
              nickname="@João"
              img="https://media-exp1.licdn.com/dms/image/C4D03AQGRlc7LlaRTuA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=WKkADtDL5JULdutpMVLLby5lTtrFqlJDrnKXPS96cdI"
            />,
            <FollowSuggestion
              name="Robson Jean Penteado"
              nickname="@Robson"
              img="https://media-exp1.licdn.com/dms/image/C4D03AQHixM12c1sd_A/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=ceVJ5-SO34Z4ykNHSuwKbNu4OARJ5vee0rb3VNtVftc"
            />
          ]}
        />

        <List 
          title="O que está acontecendo"
          elements={[
            <News
              titulo="Assuntos do momento no Brasil"
              assunto="Brasileiros na luta conta o COVID-19"/>,
            <News
              titulo="Política . Ontem"
              assunto="Premiê do Líbano renuncia ao cargo após megaexplosão
              "/>,
            <News
              titulo="Educação"
              assunto="Como está sendo a aula online no Brasil"/>,
            <News
              titulo="O que está acontecendo no mundo"
              assunto="As imagens do Monte Sinabung que entrou em erupção na Indonésia"/>,
          ]}
        />
        </Body>
      </StickBox>
      <Mensagens />
    </Container>

  );
}

export default SideBar;