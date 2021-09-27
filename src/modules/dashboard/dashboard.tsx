import React, { FC } from "react";
import styled from "styled-components";
import { Table } from "../table/table";
import { PatientsData } from "../types/patients";

const DashboardContainer = styled.div`
  margin: ${({ theme }) => `${theme.spacing[4]}`};
`;

export interface DashboardProps {
  data: PatientsData[];
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
