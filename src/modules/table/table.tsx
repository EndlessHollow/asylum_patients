import React, { FC } from "react";
import styled from "styled-components";
import { Row } from "../types/types";

import { TableBody } from "./table-body";
import { TableHead } from "./table-head";

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export interface TableProps<D> {
  headlines: string[];
  rowRecord: Row<D>[];
  subTable: React.ReactNode;
}

export function Table<D>(props: TableProps<D>): JSX.Element | null {
  const { headlines, rowRecord, subTable } = props;
  return (
    <StyledTable>
      <TableHead headlines={headlines} />
      <TableBody entity={rowRecord} columns={headlines} subTable={subTable} />
    </StyledTable>
  );
}

Table.displayName = "Table";
