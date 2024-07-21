import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray[10]};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    padding: 16px;
    padding-right: 44px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[20]};
    }
  }

  img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
