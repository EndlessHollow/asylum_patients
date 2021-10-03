import React, { FC } from "react";
import styled from "styled-components";
import { getHeadline } from "../helpers/get-headline";
import {
  HasPhoneRecord,
  HasRelativesRecord,
  PatientRecord,
} from "../types/patients";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const renderTable = (
  data: PatientRecord[] | HasRelativesRecord[] | HasPhoneRecord[],
  tableSubheading?: string
): JSX.Element | null => {
  const headlines = getHeadline(data[0].data);

  if (data.length === 0) {
    return null;
  }

  return (
    <StyledTable>
      {tableSubheading ? (
        <TableHead
          headlines={headlines || []}
          tableSubheading={tableSubheading}
        />
      ) : (
        <TableHead headlines={headlines || []} />
      )}
      <TableBody data={data} />
    </StyledTable>
  );
};

export interface TableProps {
  data: PatientRecord[];
}

export const Table: FC<TableProps> = (props): JSX.Element | null => {
  const { data } = props;

  return renderTable(data);
};

Table.displayName = "Table";
