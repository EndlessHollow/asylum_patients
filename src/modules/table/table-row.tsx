import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { ReactComponent as ExpandMore } from "../../assets/expand-more.svg";
import { useAppDispatch } from "../../redux/hooks";
import { deleteRow } from "../../redux/patients-slice";
import { getChildRecords } from "../helpers/get-child-records";
import { getTableCells } from "../helpers/get-table-cells";
import {
  HasPhoneRecord,
  HasRelativesRecord,
  PatientRecord,
} from "../types/patients";
import { TextAlign } from "../types/types";
import { Table } from "./table";

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

const StyledRow = styled.tr<{ index: number; isOpen: boolean }>`
  background-color: ${({ index, theme, isOpen }) =>
    isOpen
      ? theme.colors.active
      : index % 2 !== 0
      ? theme.colors.lightGrey
      : undefined};
`;

const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 50%;
`;

export interface TableRowProps {
  row: PatientRecord | HasRelativesRecord | HasPhoneRecord;
  columns: number;
  index: number;
  indices?: number[];
}

export const TableRow: FC<TableRowProps> = (props): JSX.Element => {
  const { row, columns, index, indices = [] } = props;
  const dispatch = useAppDispatch();
  const [isOpen, handleOpen] = useState(false);
  const indicisRef = useRef([...indices, index]);

  const tableCellsData = getTableCells(row.data);
  const childRecords = getChildRecords(row.kids);
  const tableTitle = Object.keys(row.kids)[0];
  const hasSubTable = Object.keys(row.kids).length > 0;

  const toggleInnerTable = () => {
    handleOpen(!isOpen);
  };

  return (
    <>
      <StyledRow key={index} index={index} isOpen={isOpen}>
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
        <TableCell textAlign="center">
          <DeleteButton onClick={() => dispatch(deleteRow(indicisRef.current))}>
            <DeleteIcon />
          </DeleteButton>
        </TableCell>
      </StyledRow>
      {hasSubTable && (
        <tr>
          <InnerTable isOpen={isOpen} colSpan={columns ? columns : undefined}>
            <Table
              tableTitle={tableTitle}
              indices={indicisRef.current}
              data={childRecords}
            />
          </InnerTable>
        </tr>
      )}
    </>
  );
};
