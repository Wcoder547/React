function customrender(mainContainer, createElement) {
  //   const newElem = document.createElement(createElement.type);
  //   newElem.innerHTML = createElement.children;
  //   newElem.setAttribute("href", createElement.props.href);
  //   newElem.setAttribute("target", createElement.props.target);
  //   mainContainer.appendChild(newElem);

  const newElem = document.createElement(createElement.type);
  newElem.innerHTML = createElement.children;
  for (const prop in createElement.props) {
    if (prop === "children") {
      continue;
    }
    newElem.setAttribute(prop, createElement.props[prop]);
  }
  mainContainer.appendChild(newElem);
}

const createElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visit google",
};

const mainContainer = document.getElementById("root");

customrender(mainContainer, createElement);
