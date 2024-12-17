import { CasewareLogo, IdeagenLogo, SmartExporterLogo } from "@/public/images";
import { Feature } from "@/types/feature";

const productOverviewData: Feature[] = [
  {
    id: 1,
    icon: <IdeagenLogo />,
    title: "",
    paragraph:
      "Enhance resilience and risk awareness from board level to the front line. Ideagen offers modern, intuitive systems for effective audit and risk management.",
    link: "/services/internal-audit",
  },
  {
    id: 2,
    icon: <CasewareLogo />,
    title: "",
    paragraph:
      "Utilize Caseware’s advanced audit solutions that integrate intelligent content to improve risk assessment and audit execution.",
    link: "/services/internal-audit",
  },
  {
    id: 3,
    icon: <SmartExporterLogo />,
    title: "",
    paragraph:
      "SmartExporter provides an easy and flexible solution for exporting and processing SAP data, ensuring seamless access to relevant information.",
    link: "/services/internal-audit",
  },
];
export default productOverviewData;
