import { useRouter } from "next/router";
import React from "react";

const ClientsProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>Projects of Client</div>;
};

export default ClientsProjectsPage;
