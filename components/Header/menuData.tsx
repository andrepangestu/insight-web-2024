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
    submenu: [
      {
        id: 21,
        title: "Ideagen Internal Audit",
        path: "/products/ideagen-internal-audit",
        newTab: false,
      },
      {
        id: 22,
        title: "Ideagen Risk Management",
        path: "/products/ideagen-risk-management",
        newTab: false,
      },
      {
        id: 23,
        title: "Ideagen Huddle",
        path: "/products/ideagen-huddle",
        newTab: false,
      },
      {
        id: 24,
        title: "Caseware IDEA",
        path: "/products/caseware-idea",
        newTab: false,
      },
      {
        id: 24,
        title: "Caseware Working Papers",
        path: "/products/caseware-working-papers",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Training",
    path: "/training",
    newTab: false,
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
    id: 5,
    title: "Contact Us",
    path: "/contact-us",
    newTab: false,
  },
];
export default menuData;
