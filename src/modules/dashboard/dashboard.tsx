import React, { FC } from "react";
import styled from "styled-components";
import { Table } from "../table/table";
import { PatientRecord } from "../types/patients";

const DashboardContainer = styled.div`
  margin: ${({ theme }) => `${theme.spacing[4]}`};
`;

export interface DashboardProps {
  data: PatientRecord[];
}

export const Dashboard: FC<DashboardProps> = (props): JSX.Element => {
  const { data } = props;

  return (
    <DashboardContainer>
      <Table data={data} />
    </DashboardContainer>
  );
};

Dashboard.displayName = "Dashboard";
