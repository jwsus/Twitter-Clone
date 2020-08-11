import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 2;
  background: var(--primary);

  width: max(350px, min(400px, 22vw));
  height: 53px;

  bottom: 0;
  position: fixed;
  /* margin-left: max(100px, min(250px, 22vw)); */
  margin-left: min(5%);
  margin-right: min(-20%);
  border: solid 1px white;
  

  @media (max-width: 1100px) {
    display: none;
  }

  @media (min-width: 1280px) {
    margin-left: min(4%);
    margin-right: min(-20%);
  }
`;
