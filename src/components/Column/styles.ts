import styled from 'styled-components';

export interface ColumnProps {
  color: string;
}

export const Container = styled.div<ColumnProps>`
  width: 25%;
  min-width: 315px;
  height: fit-content;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  margin-right: 20px;
  padding: 15px;
`;

export const Title = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const NewCard = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 0;

  span {
    color: #fff;
    font-size: 16px;
    margin: 0;

    span {
      font-size: 14px;
    }
  }
`;
