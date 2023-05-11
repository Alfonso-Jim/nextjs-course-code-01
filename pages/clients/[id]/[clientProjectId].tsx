import { useRouter } from "next/router";

import React from "react";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>Project page for specific project for a specific client</div>;
};

export default SelectedClientProjectPage;
