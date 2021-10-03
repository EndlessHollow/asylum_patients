import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initializeStore } from "../helpers/initialize-store";
import { Table } from "./table";

export const RelativesTable = () => {
  const dispatch = useAppDispatch();
  const { headlines, relatives } = useAppSelector((state) => state.relatives);
  const relativesRecord = Object.values(relatives);

  console.log("render sub table");

  useEffect(() => {
    initializeStore(dispatch);
  }, []);

  return (
    <Table
      headlines={headlines}
      rowRecord={relativesRecord}
      subTable={<div> X </div>}
    />
  );
};
