// import React, { useContext } from "react";
import React from "react";
// import NavigationContext from "./context/navigation";
import useNavigation from "./hooks/use-navigation";
import classNames from "classnames";
function Link({ to, children, className, activeClassName }) {
//   const { navigate } = useContext(NavigationContext);
const { navigate, currentPath } = useNavigation();
  const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);
  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey){
        return;
    }
    event.preventDefault();
    navigate(to);
  };
  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
