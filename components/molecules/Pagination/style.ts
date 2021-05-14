import styled from 'styled-components';

export const DIV = styled.div.attrs(() => ({
  className: 'w-full flex justify-center',
}))`
  ul {
    display: flex;
    .active-class {
      a {
        color: ${({ theme }) => theme.color.black};
      }
    }
    .previous {
      &:hover {
        svg {
          path {
            stroke: ${({ theme }) => theme.color.gray};
          }
        }
      }
    }

    .next {
      &:hover {
        svg {
          path {
            stroke: ${({ theme }) => theme.color.gray};
          }
        }
      }
    }

    li {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.937rem;

      a {
        width: 100%;
        height: auto;
        font-size: 1.812rem;
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.gray};
        min-width: 1.437rem;

        &:hover {
          color: ${({ theme }) => theme.color.black};
        }
      }
    }
  }
`;