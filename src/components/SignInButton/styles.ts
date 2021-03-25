import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    height: 3rem;
    border-radius: 3rem;
    background: ${theme.colors.shape};
    color: ${theme.colors.white};
    font-weight: bold;
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      width: 20px;
      height: 20px;

      &:first-child {
        margin-right: 1rem;
      }

      &:last-child {
        margin-left: 1rem;
      }
    }
  `}
`;
