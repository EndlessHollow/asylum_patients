import React from "react";
import { Row } from "../types/types";
import { TableRow } from "./table-row";

export interface TableBodyProps<D> {
  entity: Row<D>[];
  columns: string[];
  subTable: React.ReactNode;
}

export function TableBody<D>(props: TableBodyProps<D>) {
  const { entity, columns, subTable } = props;

  return (
    <tbody>
      {entity.map((row, index) => (
        <TableRow key={index} row={row} columns={columns} subTable={subTable} />
      ))}
    </tbody>
  );
}

TableBody.displayName = "Table Body";
