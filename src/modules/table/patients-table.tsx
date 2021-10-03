import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initializeStore } from "../helpers/initialize-store";
import { Table } from "./table";
import { RelativesTable } from "./relatives-table";

export const PatientsTable = () => {
  const dispatch = useAppDispatch();
  const { headlines, patients } = useAppSelector((state) => state.patients);
  const patientsRecord = Object.values(patients);

  console.log("render main table");

  useEffect(() => {
    initializeStore(dispatch);
  }, []);

  return (
    <Table
      headlines={headlines}
      rowRecord={patientsRecord}
      subTable={<RelativesTable />}
    />
  );
};
