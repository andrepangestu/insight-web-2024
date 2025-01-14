import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Solutions",
    newTab: false,
    path: "solutions",
    submenu: [
      {
        id: 21,
        title: "Internal Audit",
        path: "/solutions/internal-audit",
        newTab: false,
      },
      {
        id: 22,
        title: "External Audit",
        path: "/solutions/external-audit",
        newTab: false,
      },
      {
        id: 23,
        title: "Risk Management",
        path: "/solutions/risk-management",
        newTab: false,
      },
      {
        id: 24,
        title: "Data Analytics",
        path: "/solutions/data-analytics",
        newTab: false,
      },
      {
        id: 25,
        title: "Document Collaboration",
        path: "/solutions/document-collaboration",
        newTab: false,
      },
      {
        id: 26,
        title: "Financial Reporting",
        path: "/solutions/financial-reporting",
        newTab: false,
      },
      {
        id: 27,
        title: "Independent Review for Brokerage",
        path: "/solutions/independent-review-for-brokerage",
        newTab: false,
      },
      {
        id: 28,
        title: "IT Assurance",
        path: "/solutions/it-assurance",
        newTab: false,
      },
      {
        id: 29,
        title: "IT Advisory",
        path: "/solutions/it-advisory",
        newTab: false,
      },
      {
        id: 30,
        title: "IT BCP / DRP",
        path: "/solutions/it-bcp-drp",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    path: "products",
    submenu: [
      {
        id: 31,
        title: "Ideagen Internal Audit",
        path: "/products/ideagen-internal-audit",
        newTab: false,
      },
      {
        id: 32,
        title: "Ideagen Risk Management",
        path: "/products/ideagen-risk-management",
        newTab: false,
      },
      {
        id: 33,
        title: "Ideagen Huddle",
        path: "/products/ideagen-huddle",
        newTab: false,
      },
      {
        id: 34,
        title: "Caseware IDEA",
        path: "/products/caseware-idea",
        newTab: false,
      },
      {
        id: 35,
        title: "Caseware Working Papers",
        path: "/products/caseware-working-papers",
        newTab: false,
      },
      {
        id: 36,
        title: "Caseware Cloud",
        path: "/products/caseware-cloud",
        newTab: false,
      },
      {
        id: 37,
        title: "Caseware Cloud Financials",
        path: "/products/caseware-cloud-financials",
        newTab: false,
      },
      {
        id: 38,
        title: "Caseware Audit Solution",
        path: "/products/caseware-audit-solution",
        newTab: false,
      },
      {
        id: 39,
        title: "Smart Exporter",
        path: "/products/smart-exporter",
        newTab: false,
      },
      {
        id: 40,
        title: "Smart Analyzer",
        path: "/products/smart-analyzer",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Training",
    newTab: false,
    path: "training",
    submenu: [
      {
        id: 41,
        title: "IDEA Training Overview",
        path: "/training/idea-training-overview",
        newTab: false,
      },
      {
        id: 42,
        title: "IDEA Training Level 1",
        path: "/training/idea-training-level-1",
        newTab: false,
      },
      {
        id: 43,
        title: "IDEA Training Level 2",
        path: "/training/idea-training-level-2",
        newTab: false,
      },
      {
        id: 44,
        title: "IDEA Script Course",
        path: "/training/idea-script-course",
        newTab: false,
      },
      {
        id: 45,
        title: "CIDA Certification & Preparation",
        path: "/training/cida-certification-preparation",
        newTab: false,
      },
      {
        id: 46,
        title: "Fees & Schedules",
        path: "/training/fees-schedules",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "About Us",
    path: "/about-us",
    newTab: false,
  },
  {
    id: 6,
    title: "News & Events",
    path: "/news-events",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact Us",
    path: "/contact-us",
    newTab: false,
  },
];
export default menuData;
