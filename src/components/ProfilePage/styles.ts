import styled, { css } from 'styled-components';

import {LocationOn, Cake} from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 

  max-height: 100%;
  /* o que for muito grande passa a ser scroll */
  overflow-y: none; 

  scrollbar-width: none; /**FireFox */
  ::-webkit-scrollbar{
    display: none; /**Crhome */
  }
`;
export const Banner = styled.div`
  flex-shrink: 0; /**não deixa diminuir */
  width: 100%;

  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div`

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  > img {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vh));
    
    /* border: 2px solid var(--gray); */
    border-radius: 50%;

    /* background-color: var(--gray); */

  }

`;


export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  /**minimo entre 17 e 67 top, 16 rigth left, 0 bottom */ 

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    padding: 11px;
    > a {
    text-decoration: none;
    color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`${iconCSS}`;
export const CakeIcon = styled(Cake)`${iconCSS}`;

export const FollowAge = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
      /** a cada span depois do primeiro da um espaçamento de 20px */
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
