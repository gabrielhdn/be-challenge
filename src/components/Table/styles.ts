import styled from 'styled-components';

interface IExpandableRowProps {
  selected: boolean;
}

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px 8px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  width: 100%;

  @media (max-width: 865px) {
    table-layout: fixed;
  }

  thead {
    background: ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.shadows.small};
    height: 47px;
    position: sticky;
    top: 0;
    z-index: 1;

    th {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      padding-inline: 32px;
      text-align: left;

      @media (max-width: 865px) {
        text-align: center;
        padding-inline: 0;
      }
    }
  }

  tbody {
    background-color: ${({ theme }) => theme.colors.white};
  }

  .mobile-closed {
    @media (max-width: 865px) {
      display: none;
    }
  }

  .mobile-open {
    display: none;

    @media (max-width: 865px) {
      display: table-cell;
    }
  }

  .dot {
    @media (max-width: 865px) {
      font-size: 35px;
    }
  }
`;

export const ExpandableRow = styled.tr<IExpandableRowProps>`
  box-shadow: ${({ theme, selected }) => (selected ? 'none' : theme.shadows.small)};

  @media (min-width: 866px) {
    box-shadow: ${({ theme }) => theme.shadows.small};
  } // to fix window resizing bugs

  td {
    padding: 7.5px; // sets height to 49px (Figma)
    padding-inline: 32px;
    text-align: left;

    @media (max-width: 865px) {
      text-align: center;
      padding-inline: 0;
    }
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .image-data {
    display: flex;
    align-items: center;

    @media (max-width: 865px) {
      justify-content: center;
    }

    img {
      border-radius: 50%;
      height: 34px;
      width: 34px;
    }
  }
`;

export const ExpandedContent = styled.tr`
  display: none;

  @media (max-width: 865px) {
    display: table-row;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  .expanded-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 36px 24px 36px;

    @media (max-width: 340px) {
      padding-inline: 22px;

      div {
        font-size: 14px;

        h2 {
          font-size: 14px;
        }
      }
    }

    div {
      border-bottom: 1px dashed ${({ theme }) => theme.colors.gray[10]};
      display: flex;
      justify-content: space-between;
    }
  }
`;
