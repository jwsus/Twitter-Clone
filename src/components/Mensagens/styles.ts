import styled, { css }from 'styled-components';

import CSS from 'csstype';

import { ArrowToTop, MessageAdd } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  z-index: 2;
  background: var(--primary);

  width: max(350px, min(400px, 22vw));
  /* height: 500px; */

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--twitter);

  > span {
    font-weight: bold;
    font-size: 25px;
    padding-left: 15px;
    padding-top: 5px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > div {
    cursor: pointer;
    
    &:hover {
      opacity: 0.7px
    }
  }
`;

const iconCSS = css`
  width: 35px;
  height: 35px;
  padding-left: 5px;
  

  fill: var(--twitter);
`;

export const Body = styled.div`
  height: 500px;
`;

export const Arrow = styled(ArrowToTop)`${iconCSS}`;  

export const Message = styled(MessageAdd)`${iconCSS}`;

export const classe: CSS.Properties = {
  background: 'blue'
}
