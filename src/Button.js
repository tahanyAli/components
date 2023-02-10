import React from "react";
import className from "classnames";
// import PropTypes from 'prop-types';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes =
    className(rest.className,"flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-yellow-400 bg-yellow-400 text-white":warning,
      "border-red-500 bg-red-500 text-white":danger,
      "border-green-500 bg-green-500 text-white":success,
      "rounded-full":rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-yellow-400': outline && warning,
      'text-green-500': outline && success,
      'text-red-900': outline && danger,
    });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "only one of primary, secondary, warning, success , danger can be true"
      );
    }
  },
};
export default Button;
