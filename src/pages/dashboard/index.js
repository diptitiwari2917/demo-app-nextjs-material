import React from "react";
import { Box } from "@mui/material";
import YearBook from "@/components/pages/dashboard/yearBook";
import HowWorks from "@/components/pages/dashboard/howWorks";
import Notice from "@/components/pages/dashboard/notice";
import CeleberateChild from "@/components/pages/dashboard/celebrateChild";
import Customers from "@/components/pages/customers";
import CreateYearBook from "@/components/pages/createYearBook";

const index = () => {
  return (
    <Box>
      <YearBook />
      <HowWorks />
      <CeleberateChild/>
      <Notice/>
      <CreateYearBook/>
      <Customers/>
    </Box>
  );
};

export default index;
