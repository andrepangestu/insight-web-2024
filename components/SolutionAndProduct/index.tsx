import Link from "next/link";
import React from "react";
import { solutionAndProductData } from "./data";

const SolutionAndProduct = () => {
  return (
    <section className="bg-cultured py-4">
      <div className="container grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
        {solutionAndProductData.map((item: any) => (
          <div className="w-full" key={item.category}>
            <div className="mb-4 text-base font-semibold text-primaryText">
              {item.category}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                {item.itemLeft.map((data: any, index: number) => (
                  <Link href={data?.link} key={index}>
                    <span className="mb-1 block text-xs font-normal text-primaryTextBody">
                      {data?.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div>
                {item.itemRight.map((data: any, index: number) => (
                  <Link href={data?.link} key={index}>
                    <span className="mb-1 block text-xs font-normal text-primaryTextBody">
                      {data?.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="w-full md:text-right">
          <div className="mb-4 text-base font-semibold text-primaryText">
            PT. Insight Consulting
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Sona Topas Tower, Level 16 Jl Jend. Sudirman
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Kav. 26 Jakarta 12920, Indonesia.
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Email : info@insight.co.id,
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Telp : 021-2506696
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Fax : 021-250 6697
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Monday - Friday : 09.00 - 17.00
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionAndProduct;
