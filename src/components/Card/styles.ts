import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  min-width: 300px;
  height: fit-content;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  margin-right: 20px;
  padding: 15px;
`;
