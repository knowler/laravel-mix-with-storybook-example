import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const variants = {
  primary: 'rounded px-3',
  pill: 'rounded-full px-4',
};

const Button = ({ variant, ...props }) => (
  <button
    className={cx(
      'py-2',
      'bg-indigo-600',
      'hover:bg-indigo-500',
      'text-white',
      'font-semibold',
      'shadow-inner',
      'hover:shadow-md',
      'transition-all',
      variants[variant],
    )}
    {...props}
  />
);

Button.defaultProps = {
  variant: Object.keys(variants)[0],
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
};

export default Button;
