import React, {PropTypes} from 'react';
import {pure} from 'recompose';

export const AnimalDetails = ({id, name, description, isActive,
  onClick, setActiveState, className}) => (
  <section>
    <div className={className}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </section>
);

AnimalDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string
};

export default pure(AnimalDetails);
