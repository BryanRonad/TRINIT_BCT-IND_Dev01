var elementsArray = [
  { element: "Button", child: true },
  { element: "Card", child: true, children: [] },
  {
    element: "Navbar",
    child: false,
    children: [],
  },

  { element: "Footer", child: false, children: [] },
  { element: "Text", child: true },
  { element: "Image", child: true },
];

function myElementsArray() {
  return elementsArray;
}

export default myElementsArray;
