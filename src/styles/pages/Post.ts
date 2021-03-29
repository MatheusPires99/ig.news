import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
  `}
`;

export const Post = styled.article`
  ${({ theme }) => css`
    max-width: 720px;
    margin: 5rem auto 0;

    h1 {
      font-size: 3.5rem;
      font-weight: 900;
    }

    time {
      display: block;
      font-size: 1rem;
      color: ${theme.colors.grey};
      margin-top: 1.5rem;
    }
  `}
`;

export const PostContent = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.25rem;
    color: ${theme.colors.text};

    p,
    ul {
      margin: 1.5rem 0;
    }

    ul {
      padding-left: 1.5rem;

      li {
        margin: 0.5rem 0;
      }
    }
  `}
`;
