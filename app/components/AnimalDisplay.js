import React, {PropTypes} from 'react';
import {pure} from 'recompose';

export const AnimalDisplay = ({id, name, description,
  onClick, className}) => (
  <section
    className={className}
    onClick={() => onClick(id)}>
    <div className={'animalDisplay'}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </section>
);

AnimalDisplay.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default pure(AnimalDisplay);