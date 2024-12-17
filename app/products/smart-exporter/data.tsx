import {
    CheckFileIcon,
    Client1Icon,
    Client2Icon,
    CopyIcon,
    ExchangeIcon,
    ExtensionsFolderIcon,
    RemoteWorkingIcon,
    ServerIcon,
    SyncIcon,
    VpnIcon,
  } from "@/public/icons";

  export const casewareSmartExporterData = [
    {
      id: 1,
      imageSrc: "/images/products/smart-exporter/smart-exporter-1.svg",
      imageAlt: "smart-exporter-1",
      title: "Effortlessly Access Your SAP® Data",
      content:
        "SmartExporter simplifies the export of SAP® data for the 100,000 companies worldwide that use the software. Overcome challenges posed by complex data structures and workflows by quickly exporting the necessary data for audits to any directory. With SmartExporter, access all transparent SAP® tables, database views, pooled tables, cluster tables, and archived data, ensuring you have the vital information you need at your fingertips.",
    },
    {
      id: 2,
      imageSrc: "/images/products/smart-exporter/smart-exporter-2.svg",
      imageAlt: "smart-exporter-2",
      title: "Quick Results",
      content:
        "SmartExporter allowing you to create data requests on your own computer in the familiar Windows environment, and helps reduce data analysis costs. It's ideal for internal audits, controlling, finance, accounting, bookkeeping, IT, sales, and other areas needing efficient data management.",
      reverse: true,
    },
    {
      id: 3,
      imageSrc: "/images/products/smart-exporter/smart-exporter-3.svg",
      imageAlt: "smart-exporter-3",
      title: "Easily Handle SAP® Data",
      content:
        "If you're not familiar with SAP®, SmartExporter makes it simple. You can specify tables, joins, fields, and filters, save your requests as favorites, and reuse them anytime by passing complex SAP® features. SmartExporter also integrates with IDEA and SmartAnalyzer, allowing you to identify and export the SAP® data you need for audits and analyze it within these tools.",
    },{
        id: 4,
        imageSrc: "/images/products/smart-exporter/smart-exporter-4.svg",
        imageAlt: "smart-exporter-4",
        title: "Prepare Data Efficiently",
        content:
        "SmartExporter simplifies data preparation by allowing you to define the necessary joins while creating your Data Request. This helps you tailor the data volume to your specific needs. The join definitions are seamlessly integrated into your request, ensuring that SmartExporter delivers data ready for immediate analysis. You can use SmartExporter for Inner or Left Outer Joins, including for Pool and Cluster tables.",
          reverse: true,
      },
      {
        id: 5,
        imageSrc: "/images/products/smart-exporter/smart-exporter-5.svg",
        imageAlt: "smart-exporter-5",
        title: "Flexible Data Export",
        content:
        "SmartExporter provides two options for exporting data: connect directly to the SAP® system for synchronous exports of smaller data volumes or asynchronous exports for larger volumes. Alternatively, you can work offline, which is useful for external auditors. Whether online or offline, SmartExporter allows you to run exports based on system workload or schedule them during off-peak hours, such as at night or on weekends.",
      },
      ,
      {
        id: 6,
        imageSrc: "/images/products/smart-exporter/smart-exporter-6.svg",
        imageAlt: "smart-exporter-6",
        title: "Your Data Security Solution",
        content:
        "SmartExporter prioritizes security by limiting user access to SAP® data based on existing SAP® access authorizations, with options for custom permissions. This authorization system extends beyond table-level access to include details like company codes and fiscal years, ensuring data is displayed as read-only and cannot be edited. Additionally, SmartExporter creates files that comply with GDPdU default data structure, further enhancing data security and compliance.",
        reverse: true,
      },
  ];
  
  export const casewareSmartExporterKeyFeatures = [
    {
      id: 1,
      icon: <VpnIcon />,
      title: "Desktop Edition",
      paragraph:
        "The full version with access to all features for comprehensive data management.",
      link: "",
    },
    {
      id: 2,
      icon: <Client1Icon />,
      title: "Client Edition",
      paragraph:
        "Optimized for smooth auditor-client workflows, allowing flexible synchronous and asynchronous data extraction. It works in conjunction with the Desktop Edition, importing Data Requests or favorites created there.",
      link: "",
    },
    {
      id: 3,
      icon: <ServerIcon />,
      title: "Server Edition",
      paragraph:
        "Integrates with systems like IDEA Server or CaseWare Monitor, ideal for high automation and integration.",
      link: "",
    },
    {
      id: 4,
      icon: <Client2Icon />,
      title: "Starter Edition",
      paragraph:
        "A free version with limited functionalities for testing and evaluating SmartExporter Desktop features.",
      link: "",
    },
  ];
  