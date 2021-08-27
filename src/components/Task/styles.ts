import styled from 'styled-components';

import { Container as Card } from 'atoms/Card/styles';

export const Container = styled(Card)`
  position: relative;
  width: 100%;
  min-width: fit-content;
  min-height: 90px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #212529;
    margin-bottom: 15px;
    word-break: break-all;
  }

  p {
    width: fit-content;
    max-width: 180px;
    background-color: ${({ color }) => color};
    border-radius: 5px;
    padding: 5px 10px;
    color: #ffffff;
    margin: 0;
    word-break: break-all;
  }
`;

export const Edit = styled.select`
  position: absolute;
  right: 10px;
  bottom: 22px;
  border: 0;
  width: 65px;
`;

export const Remove = styled.button`
  position: absolute;
  right: 5px;
  top: 0;
  border: 0;
  background-color: transparent;
  color: #e81224;
  font-weight: bold;
`;
