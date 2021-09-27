import React, { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ExpandMore } from "../../assets/expand-more.svg";
import { getRecordsFromKids } from "../helpers/get-records-from-kids";
import { getTableCells } from "../helpers/get-table-cells";
import {
  HasPhoneRecord,
  HasRelativesRecord,
  PatientRecord,
} from "../types/patients";
import { TextAlign } from "../types/types";
import { renderTable } from "./table";

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

export interface TableRow {
  row: PatientRecord | HasRelativesRecord | HasPhoneRecord;
  columns: string[] | undefined;
  index: number;
}

export const TableRow: FC<TableRow> = (props) => {
  const { row, columns, index } = props;
  const [isOpen, handleOpen] = useState(false);

  const tableCellsData = getTableCells(row.data);
  const kidsRecord = getRecordsFromKids(row.kids);
  const kidsData = Object.keys(row.kids)[0];
  const hasSubTable = Object.keys(row.kids).length > 0;

  const toggleInnerTable = () => {
    handleOpen(!isOpen);
  };

  return (
    <>
      <tr key={index}>
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
      </tr>
      {hasSubTable && (
        <tr>
          <InnerTable
            isOpen={isOpen}
            colSpan={columns?.length ? columns?.length + 1 : undefined}
          >
            {renderTable(kidsRecord, kidsData)}
          </InnerTable>
        </tr>
      )}
    </>
  );
};
