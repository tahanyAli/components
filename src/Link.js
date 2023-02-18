// import React, { useContext } from "react";
// import NavigationContext from "./context/navigation";
import useNavigation from "./hooks/use-navigation";
import className from "classnames";
function Link({ to, children }) {
//   const { navigate } = useContext(NavigationContext);
const { navigate } = useNavigation();
  const classes = className('text-blue-500');
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
