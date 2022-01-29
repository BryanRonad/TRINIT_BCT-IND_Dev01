var elementsArray = [
  {
    elem_id: "",
    element: "Button",
    icon: "MdOutlineSmartButton",
    child: true,
    properties: {
      fontsize: "20px",
      fontcolor: "black",
      width: "100%",
      height: "200px",
    },
  },
  {
    elem_id: "",
    element: "Card",
    icon: "BsCardText",
    child: true,
    properties: {
      fontsize: "20px",
      fontcolor: "black",
      width: "100%",
      height: "200px",
    },
  },
  {
    elem_id: "",
    element: "Navbar",
    icon: "BsSegmentedNav",
    child: false,
    properties: {
      fontsize: "20px",
      fontcolor: "black",
      width: "100%",
      height: "200px",
    },
  },
  {
    elem_id: "",
    element: "Grid",
    icon: "MdOutlineSmartButton",
    child: true,
    id: 1,
    properties: {
      columns: 6,
      rows: 2,
      width: "100%",
      height: "200px",
    },
    children: [],
  },
  {
    elem_id: "",
    element: "Footer",
    icon: "CgWebsite",
    child: false,
    properties: {
      fontsize: "20px",
      fontcolor: "black",
      width: "100%",
      height: "200px",
    },
  },
  {
    elem_id: "",
    element: "Text",
    icon: "MdOutlineTextFields",
    child: true,
    properties: {
      fontsize: "20px",
      fontcolor: "black",
      width: "100%",
      height: "200px",
    },
  },
  {
    elem_id: "",
    element: "Image",
    icon: "BsImage",
    child: true,
    properties: {
      src: "",
      width: "100%",
      height: "200px",
    },
  },
];

function myElementsArray() {
  return elementsArray;
}

export default myElementsArray;
