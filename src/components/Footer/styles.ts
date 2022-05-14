import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};

  border-top: 3px solid ${({ theme }) => theme.colors.primary};

  padding: 45px 10px;

  .wrapper {
    width: 80%;
    max-width: 1000px;

    margin: 0 auto;

    display: flex;
    align-items: flex-start;

    gap: 20px;

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;

      div {
        width: 100%;
      }
    }

    div {
      flex: 2;
      display: flex;
    }

    .sobre {
      flex: 2;
    }

    section {
      flex: 1;

      display: flex;
      flex-direction: column;

      h6 {
        font-size: 1.8rem;
        color: #fff;

        margin-bottom: 10px;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      li {
        font-size: 1.5rem;
        a {
          color: #737373;
        }
      }
      p {
        font-size: 1.8rem;
        color: #737373;
      }
    }
  }
`;
