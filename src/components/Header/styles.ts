import styled, { css } from 'styled-components';

interface ContainerProps {
  scroll: number;
}

export const Container = styled.header<ContainerProps>`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  position: fixed !important;
  top: 0;
  left: 0;

  z-index: 999;

  transition: 0.4s;

  ${({ scroll }) => {
    if (scroll >= 600) {
      return css`
        transform: translateY(0%);
        box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      `;
    }

    if (scroll >= 20) {
      return css`
        transform: translateY(-100%);
      `;
    }

    return ``;
  }}
`;
