import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    {
      id: "punch",
      name: "Poncho",
    },
    {
      id: "bash",
      name: "Basia",
    },
  ];
  return (
    <div>
      ClientsPage
      <ul>
        {clients.map((client) => (
          <li>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
