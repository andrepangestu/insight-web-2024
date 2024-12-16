import {
  BroadcastingIcon,
  ExtensionsFolderIcon,
  NetworkIcon,
  NetworkingManagerIcon,
} from "@/public/icons";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <NetworkingManagerIcon />,
    title: "Internal Audit",
    paragraph:
      "At Insight, we audit for business improvement, identifying inefficiencies to optimize operations and enhance performance.",
    link: "/services/internal-audit",
  },
  {
    id: 2,
    icon: <ExtensionsFolderIcon />,
    title: "Risk Management",
    paragraph:
      "Effective risk management is key to growth. Let Insight’s services strengthen compliance and drive success.",
    link: "/services/internal-audit",
  },
  {
    id: 3,
    icon: <NetworkIcon />,
    title: "IT Assurance & Governance",
    paragraph:
      "Insight provides IT assurance services designed to manage risk, with audit plans tailored to your organization's needs, following global best practices.",
    link: "/services/internal-audit",
  },
  {
    id: 4,
    icon: <BroadcastingIcon />,
    title: "Independent Review and Vulnerability Assessment",
    paragraph:
      "Insight provides Independent Review solutions to deliver clarity and secure your systems against risks.",
    link: "/services/internal-audit",
  },
];
export default featuresData;
