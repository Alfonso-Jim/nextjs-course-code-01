import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
  const router = useRouter();

  const LoadProjectHandler = () => {
    router.push({ pathname: "/clients/[id]/[clientProjectId]", query: { id: "punch", clientProjectId: "project1" } });
  };
  return (
    <div>
      Projects of Client
      <button onClick={LoadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientsProjectsPage;
