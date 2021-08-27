import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;

  :hover {
    ::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 100px;
  }

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 100px;
  }
`;
