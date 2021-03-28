import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 720px;
    margin: 5rem auto 0;

    a {
      display: block;

      &:hover strong {
        color: ${theme.colors.yellow};
      }

      & + a {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid ${theme.colors.line};
      }

      time {
        font-size: 1rem;
        color: ${theme.colors.grey};

        display: flex;
        align-items: center;
      }

      strong {
        display: block;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-top: 1rem;

        transition: color 0.2s;
      }

      p {
        color: ${theme.colors.grey};
        margin-top: 0.5rem;
        line-height: 1.625rem;
      }
    }
  `}
`;
