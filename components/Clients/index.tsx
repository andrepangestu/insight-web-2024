"use client";

import React, { useState } from "react";
import { CircleArrowDownIcon, CircleArrowUpIcon } from "@/public/icons";
import { clientData } from "./clientData";
import Collapsible from "../Collapsible";
import useDeviceType from "@/hook/use-device-type";

const Clients = () => {
  const { isMobile } = useDeviceType();
  const [isClientOpen, setIsClientOpen] = useState(false);
  return (
    <section className="container pt-4">
      <Collapsible
        isOpen={isClientOpen}
        setIsOpen={setIsClientOpen}
        title={
          isMobile ? (
            <>
              <div className="flex w-full items-center justify-between">
                <div className="w-10/12">
                  <span className="block w-full text-xs font-bold text-primaryTextBlue">
                    Trusted by over 100+ clients.
                  </span>
                  <span className="w-full text-xs font-normal text-primaryTextBlue">
                    Our clients are our top priority, and we are committed to
                    providing them with the highest level of services
                  </span>
                </div>

                <div>
                  {isClientOpen ? (
                    <CircleArrowUpIcon />
                  ) : (
                    <CircleArrowDownIcon />
                  )}
                </div>
              </div>
              <hr className="mt-4 border-b border-lightSilver" />
            </>
          ) : (
            <>
              <div className="w-full">
                <span className="mr-2 w-full text-sm font-bold text-primaryTextBlue">
                  Trusted by over 100+ clients.
                </span>
                <span className="mr-2 w-full text-sm font-normal text-primaryTextBlue">
                  Our clients are our top priority, and we are committed to
                  providing them with the highest level of services
                </span>

                <div
                  className="icon-span"
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                >
                  {isClientOpen ? (
                    <CircleArrowUpIcon />
                  ) : (
                    <CircleArrowDownIcon />
                  )}
                </div>
              </div>
              <hr className="mt-4 border-b border-lightSilver" />
            </>
          )
        }
      >
        <div className="grid grid-cols-3 gap-4 py-4 md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:grid-cols-6">
          {clientData.map((client) => (
            <div className="w-full" key={client.category}>
              <div className="mb-4 text-xs font-semibold text-primaryTextBlue md:text-sm">
                {client.category}
              </div>
              <div className="mb-1 text-[10px] font-normal text-primaryTextBlue md:text-xs">
                {client.clients.map((client) => (
                  <div className="mb-1" key={client}>
                    {client}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Collapsible>
    </section>
  );
};

export default Clients;
