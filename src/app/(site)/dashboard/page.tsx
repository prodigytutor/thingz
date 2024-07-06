import Breadcrumb from "@/components/Common/Breadcrumb";
import Dashboard from "@/components/Dashboard";
import Thing from "@/components/Thing/Thing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dashboard | Collect, Organize, Access – Seamlessly.",
  description: "Dashboard Page",
};

const DashboardPage = () => {
  return (
    <>
      <Breadcrumb pageName="Dashboard" />
      <Dashboard />
      <Thing />
    </>
  );
};

export default DashboardPage