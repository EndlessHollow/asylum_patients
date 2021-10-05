import React, { FC } from "react";
import styled from "styled-components";
import { TextAlign } from "../types/types";

const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
`;

const TableHeadline = styled.th<{
  textAlign?: TextAlign;
}>`
  text-align: ${({ textAlign }) => textAlign || undefined};
  font-weight: ${({ theme }) => theme.fontWeight.fontBold};
  padding: ${({ theme }) => theme.spacing["2"]};
  vertical-align: middle;
`;

const TableTitle = styled.th.attrs(({ colSpan }) => ({
  colspan: colSpan || undefined,
}))<{ textAlign: TextAlign }>`
  font-weight: ${({ theme }) => theme.fontWeight.fontBold};
  text-align: ${({ textAlign }) => textAlign || undefined};
  padding: ${({ theme }) => theme.spacing["2"]};
  vertical-align: middle;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export interface TableHeadProps {
  headlines: string[];
  columns: number;
  tableTitle?: string;
}

export const TableHead: FC<TableHeadProps> = (props): JSX.Element => {
  const { headlines, columns, tableTitle } = props;

  return (
    <StyledTableHead>
      {tableTitle ? (
        <>
          <tr>
            <TableTitle colSpan={columns} textAlign={"left"}>
              {tableTitle}
            </TableTitle>
          </tr>
          <tr>
            <th></th>
            {headlines?.map((headline) => (
              <TableHeadline key={headline}>{headline}</TableHeadline>
            ))}
            <th></th>
          </tr>
        </>
      ) : (
        <tr>
          <th></th>
          {headlines?.map((headline) => (
            <TableHeadline key={headline} textAlign={"left"}>
              {headline}
            </TableHeadline>
          ))}
          <th></th>
        </tr>
      )}
    </StyledTableHead>
  );
};

TableHead.displayName = "Table Head";
