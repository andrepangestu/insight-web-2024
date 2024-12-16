import React from "react";

const SolutionAndProduct = () => {
  const solutionAndProductData: any = [
    {
      category: "Solutions",
      itemLeft: [
        "Internal Audit",
        "External Audit",
        "Risk Management",
        "Data Analytics",
        "Document Collaboration",
      ],
      itemRight: [
        "Financial Reporting",
        "Independent Review for Brokerage",
        "IT Assurance",
        "IT Advisory",
        "IT BCP/DRP",
      ],
    },
    {
      category: "Products",
      itemLeft: [
        "Ideagen Internal Audit",
        "Ideagen Risk Management",
        "Ideagen Huddle",
        "Caseware IDEA",
        "Caseware Working Papers",
      ],
      itemRight: [
        "Caseware Cloud",
        "Caseware Cloud Financials",
        "Caseware Audit Solution",
        "Smart Exporter",
        "Smart Analyzer",
      ],
    },
  ];

  return (
    <section className="bg-cultured px-24 py-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
        {solutionAndProductData.map((item: any) => (
          <div className="w-full" key={item.category}>
            <div className="mb-4 text-base font-semibold text-primaryText">
              {item.category}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                {item.itemLeft.map((item: string) => (
                  <div
                    key={item}
                    className="mb-1 text-xs font-normal text-primaryTextBody"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div>
                {item.itemRight.map((item: string) => (
                  <div
                    key={item}
                    className="mb-1 text-xs font-normal text-primaryTextBody"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="w-full text-right">
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
            Telp : 021-2506696 atau
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Fax : 021-250 6697
          </div>
          <div className="mb-1 text-xs font-normal text-primaryTextBody">
            Senin - Jumat : 09.00 - 17.00
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionAndProduct;
