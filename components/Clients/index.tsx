import React from "react";
import { CircleArrowDownIcon } from "@/public/icons";
import { clientData } from "./clientData";

const Clients = () => {
  return (
    <section className="px-24 py-4">
      <div className="flex">
        <span className="mr-2 text-sm font-bold text-primaryTextBlue">
          Trusted by over 100+ clients.
        </span>
        <span className="mr-2 text-sm font-normal text-primaryTextBlue">
          Our clients are our top priority, and we are committed to providing
          them with the highest level of services
        </span>

        <CircleArrowDownIcon />
      </div>

      <hr className="my-4 w-full border-b border-lightSilver" />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
        {clientData.map((client) => (
          <div className="w-full" key={client.category}>
            <div className="mb-4 text-sm font-semibold text-primaryTextBlue">
              {client.category}
            </div>
            <div className="mb-1 text-xs font-normal text-primaryTextBlue">
              {client.clients.map((client) => (
                <div key={client}>{client}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
