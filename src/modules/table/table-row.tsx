import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ExpandMore } from "../../assets/expand-more.svg";
import { getTableCells } from "../helpers/get-table-cells";
import { Row, TextAlign } from "../types/types";

const TableCell = styled.td<{ textAlign?: TextAlign }>`
  padding: ${({ theme }) => theme.spacing["2"]};
  text-align: ${({ textAlign }) => textAlign || undefined};
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

const ExpandMoreIcon = styled(({ isOpen, ...props }) => (
  <ExpandMore {...props} />
))<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const InnerTable = styled.td.attrs(({ colSpan }) => ({
  colspan: colSpan || undefined,
}))<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "table-cell" : "none")};
  padding: ${({ theme }) => `${theme.spacing["2"]} ${theme.spacing["4"]}`};
`;

const StyledRow = styled.tr<{ index: number }>`
  background-color: ${({ index, theme }) =>
    index % 2 !== 0 ? theme.colors.lightGrey : undefined};
`;

export interface TableRowProps<D> {
  row: Row<D>;
  columns: string[];
  index: number;
  subTable: React.ReactNode;
}

export function TableRow<D>(props: TableRowProps<D>) {
  const { row, columns, index, subTable } = props;
  const [isOpen, handleOpen] = useState(false);

  const tableCellsData = getTableCells(row.data);
  const hasSubTable = row.kids.length > 0;

  const toggleInnerTable = () => {
    handleOpen(!isOpen);
  };

  return (
    <>
      <StyledRow key={index} index={index}>
        {hasSubTable ? (
          <TableCell textAlign="center">
            <ExpandMoreIcon isOpen={isOpen} onClick={toggleInnerTable} />
          </TableCell>
        ) : (
          <TableCell></TableCell>
        )}

        {tableCellsData.map((cell, index) => (
          <TableCell key={index}>{cell}</TableCell>
        ))}
      </StyledRow>
      {hasSubTable && (
        <tr>
          <InnerTable
            isOpen={isOpen}
            colSpan={columns?.length ? columns?.length + 1 : undefined}
          >
            {subTable}
          </InnerTable>
        </tr>
      )}
    </>
  );
}
