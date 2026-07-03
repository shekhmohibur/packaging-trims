import contactData from "../contact/contactData";

const footerData = {
  description:
    "Corrugated carton and poly bag/film manufacturer built for the garments export supply chain.",

  company: [
    {
      name: "ABOUT",
      path: "/#about",
    },
    {
      name: "PRODUCTS",
      path: "/#products",
    },
    {
      name: "MANUFACTURING",
      path: "/#manufacturing",
    },
    {
      name: "SUSTAINABILITY",
      path: "/#sustainability",
    },
  ],

  products: [
    {
      name: "QUALITY",
      path: "/#quality",
    },
    {
      name: "GALLERY",
      path: "/#gallery",
    },
    {
      name: "CLIENTS",
      path: "/#clients",
    },
    {
      name: "CONTACT",
      path: "/#contact",
    },
  ],

  getStarted: [
    {
      name: "REQUEST QUOTE",
      path: "/#contact",
    },
    {
      name: "EMAIL SALES",
      path: `mailto:${contactData.email}?subject=Packaging%20Inquiry`,
    },
  ],

  location: "Dhaka, Bangladesh",
};

export default footerData;
