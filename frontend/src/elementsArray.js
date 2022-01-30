var elementsArray = [
  {
    elem_id: "",
    element: "Button",
    icon: "MdOutlineSmartButton",
    child: true,
    properties: {
      fontsize: "20px",
      fontcolor: "black",
      width: "150px",
      height: "50px",
    },
  },
  {
    elem_id: "",
    element: "Card",
    icon: "BsCardText",
    child: true,
    properties: {
      color: "yellow",
      fontsize: "20px",
      fontcolor: "black",
      width: "95%",
      height: "200px",
      margin: "15px",
      padding: "10px",
    },
  },
  {
    elem_id: "",
    element: "Navbar",
    icon: "BsSegmentedNav",
	html:"<div></div>",
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
      columns: 4,
      rows: 2,
      width: "100%",
      height: "200px",
    },
    children: [
      
    ],
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
      width: "auto",
      height: "auto",
    },
  },
  {
    elem_id: "",
    element: "Image",
    icon: "BsImage",
    child: true,
    properties: {
      src: null,
      alt: "screen-reader",
      width: "100%",
      height: "200px",
      margin: "0px",
      padding: "0px",
    },
  },
];

function myElementsArray() {
  return elementsArray;
}

export default myElementsArray;
