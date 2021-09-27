import React, { FC } from "react";
import { getHeadline } from "../helpers/get-headline";
import {
  HasPhoneRecord,
  HasRelativesRecord,
  PatientRecord,
} from "../types/patients";
import { TableRow } from "./table-row";

export interface TableBody {
  data: PatientRecord[] | HasRelativesRecord[] | HasPhoneRecord[];
}

export const TableBody: FC<TableBody> = (props) => {
  const { data } = props;

  const headlines = getHeadline(data[0].data);

  return (
    <tbody>
      {data.map((row, index) => (
        <TableRow key={index} row={row} index={index} columns={headlines} />
      ))}
    </tbody>
  );
};

TableBody.displayName = "Table Body";
