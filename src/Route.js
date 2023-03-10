// import React, { useContext } from "react";
import React from "react";
// import NavigationContext from "./context/navigation";
import useNavigation from "./hooks/use-navigation";
function Route({ path, children }) {
//   const { currentPath } = useContext(NavigationContext);
const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
