import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 260px;
    height: 4rem;
    border: 0;
    border-radius: 2rem;
    background: ${theme.colors.yellow};
    color: ${theme.colors.background};
    font-size: 1.25rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
