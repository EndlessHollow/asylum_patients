import React, { FC } from "react";
import styled from "styled-components";
import { getHeadlines } from "../helpers/get-headlines";
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

interface TableProps {
  data: PatientRecord[] | HasRelativesRecord[] | HasPhoneRecord[];
  tableTitle?: string;
  indices?: number[];
}

export const Table: FC<TableProps> = (props): JSX.Element | null => {
  const { data, tableTitle, indices } = props;
  if (!data.length) {
    return null;
  }
  const headlines = React.useMemo(() => getHeadlines(data[0]?.data), []);
  const emptyCells = 2;
  const columns = headlines.length + emptyCells;

  return (
    <StyledTable>
      {tableTitle ? (
        <TableHead
          headlines={headlines || []}
          tableTitle={tableTitle}
          columns={columns}
        />
      ) : (
        <TableHead headlines={headlines || []} columns={columns} />
      )}
      <TableBody entity={data} columns={columns} indices={indices} />
    </StyledTable>
  );
};

Table.displayName = "Table";
