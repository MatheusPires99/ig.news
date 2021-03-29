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
      color: ${theme.colors.gray};
      margin-top: 1.5rem;
    }
  `}
`;

export const PostContent = styled.div<{ previewContent?: boolean }>`
  ${({ theme, previewContent }) => css`
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.25rem;
    color: ${theme.colors.text};

    ${previewContent &&
    css`
      background: linear-gradient(${theme.colors.text}, transparent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}

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

export const ContinueReading = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    margin: 4rem 0 2rem;
    text-align: center;
    background: ${theme.colors.shape};
    border-radius: 100px;
    font-size: 1.25rem;
    font-weight: bold;

    a {
      color: ${theme.colors.yellow};
      margin-left: 0.5rem;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
