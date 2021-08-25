import styled from 'styled-components';

interface ContainerProps {
  textColor: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 0;
  background-color: transparent;

  span {
    display: flex;
    align-items: center;
    color: ${({ textColor }) => textColor};
    font-size: 16px;

    svg {
      margin-right: 15px;
    }
  }
`;
