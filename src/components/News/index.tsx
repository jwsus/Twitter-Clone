import React from 'react';

import { Container } from './styles';

interface Props {
  titulo: string;
  assunto: string;
}

const News: React.FC<Props> = ({
  titulo,
  assunto
}) => {
  return (
    <Container>
      <span>
        {titulo}
      </span>
  <strong>{assunto}</strong>
    </Container>
  );
}

export default News;