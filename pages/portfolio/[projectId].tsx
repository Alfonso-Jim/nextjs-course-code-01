import { useRouter } from "next/router";

import React from "react";

const PorfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);
  return (
    <div>
      PorfolioProjectPage
      <ul>
        <li>
          The pathname is: <strong>{router.pathname}</strong>
        </li>
        <li>
          The query.projectId is: <strong>{router.query.projectId}</strong>
        </li>
      </ul>
    </div>
  );
};

export default PorfolioProjectPage;
