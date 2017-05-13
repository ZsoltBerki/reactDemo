import React, {PropTypes} from 'react';
import cx from 'classnames';
import {pure} from 'recompose';
import styles from './Button/styles.scss';

export const Button = props => {
  const {className, small, secondary, link, medium, type, ...rest} = props;
  const size = small ? 'small' : medium ? 'medium' : 'default';
  const isLink = link ? 'link' : 'default';
  const classes = cx(styles.testThings, styles[size], styles[isLink], className, secondary && styles['secondary']);
  const Element = props.href ? 'a' : 'button';

  return (
    <Element
      className={styles.testThings}
      type={props.href ? null : type}
      {...rest}
    />
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  link: PropTypes.bool,
  target: PropTypes.string,
  type: PropTypes.string
};

export default pure(Button);
