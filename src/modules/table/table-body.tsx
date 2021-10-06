import React, { FC } from "react";
import {
  HasPhoneRecord,
  HasRelativesRecord,
  PatientRecord,
} from "../types/patients";
import { TableRow } from "./table-row";

export interface TableBodyProps {
  entity: PatientRecord[] | HasRelativesRecord[] | HasPhoneRecord[];
  columns: number;
  indices?: number[];
}

export const TableBody: FC<TableBodyProps> = (props): JSX.Element => {
  const { entity, columns, indices } = props;

  const renderTables = entity.map((row, index) => (
    <TableRow
      key={index}
      row={row}
      columns={columns}
      index={index}
      indices={indices}
    />
  ));

  return <tbody>{renderTables}</tbody>;
};

TableBody.displayName = "Table Body";
