import { initializeStore } from "../helpers/initialize-store";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Table } from "../table/table";

export const Dashboard = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.patients);
  useEffect(() => {
    initializeStore(dispatch);
  }, []);

  return <Table data={data} />;
};

Dashboard.displayName = "Dashboard";
