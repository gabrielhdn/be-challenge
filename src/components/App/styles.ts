import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  header {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.large};
    height: 60px;
    padding: 12px;
    padding-inline: 32px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 44px;
    }

    @media (max-width: 865px) {
      padding-inline: 20px;
    }
  }
`;

export const MainContent = styled.main`
  padding: 40px;
  padding-inline: 32px;

  @media (max-width: 865px) {
    padding: 20px;
  }

  section {
    margin-bottom: 40px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 24px;
      font-weight: 500;
    }

    @media (max-width: 865px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 28px;
      margin-bottom: 22px;

      .input-container, input {
        width: 100%;
      }
    }
  }
`;
