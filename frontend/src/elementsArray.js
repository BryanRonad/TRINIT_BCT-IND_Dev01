var elementsArray = [
  { element: "Button", icon: "MdOutlineSmartButton", child: true },
  { element: "Card", icon: "BsCardText", child: true, children: [] },
  {
    element: "Navbar",
    icon: "BsSegmentedNav",
    child: false,
    children: [],
  },
  {
    element: "Grid",
    icon: "MdOutlineSmartButton",
    child: true,
    properties: {
		columns:6,
		rows:2,
		width:'100%',
		height:'200px',
	},
  },
  { element: "Footer", icon: "CgWebsite", child: false, children: [] },
  { element: "Text", icon: "MdOutlineTextFields", child: true },
  { element: "Image", icon: "BsImage", child: true },
];

function myElementsArray() {
  return elementsArray;
}

export default myElementsArray;
