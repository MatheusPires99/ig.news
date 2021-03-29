import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 5rem;
    border-bottom: 1px solid ${theme.colors.line};
  `}
`;

export const Content = styled.div`
  ${() => css`
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    nav {
      margin-left: 5rem;
      height: 5rem;
    }

    button {
      margin-left: auto;
    }
  `}
`;

export const NavLink = styled.a<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${theme.colors.text};
    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: ${theme.colors.white};
    }

    ${isActive &&
    css`
      font-weight: bold;

      &:after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        background: ${theme.colors.yellow};

        position: absolute;
        bottom: 1px;
        left: 0;
      }
    `}
  `}
`;
