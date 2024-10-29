export const getTableStyles = (token) => {
  const { colorInfoBg } = token;
  return `
        .insight-table .ant-table-wrapper {
          padding-left: 10px;
          padding-top: 0;
          background: ${colorInfoBg};
        }

        .insight-table .ant-table-cell {
          background: ${colorInfoBg};
          border: none;
        }

        .insight-table .ant-table-thead .ant-table-cell {
          background: ${colorInfoBg};
          border-bottom: 1px solid rgba(28, 28, 28, 0.2);
        }

        .insight-table .ant-table-tbody > tr > td {
          border: none;
        }

        .insight-table .ant-table-cell .ant-table-cell-row-hover {
        background: pink
        }
      `;
};
