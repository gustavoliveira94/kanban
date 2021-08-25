import styled from 'styled-components';

export interface ColumnProps {
  color: string;
}

export const Container = styled.div<ColumnProps>`
  width: 25%;
  min-width: 315px;
  min-height: 250px;
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
