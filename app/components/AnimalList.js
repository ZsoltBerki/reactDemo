import React, {PropTypes} from 'react';
import AnimalDisplay from './AnimalDisplay';
import {pure} from 'recompose';

export const AnimalList = ({animals, selectAnimal, itemClass}) => (
  <section>
    {animals.map(animal => (
      <AnimalDisplay
        className={itemClass}
        id={animal.id}
        name={animal.name}
        description={animal.description}
        onClick={id => selectAnimal(animals.find(animal => animal.id === id))}
      />
    ))}
  </section>
);

AnimalList.propTypes = {
  itemClass: PropTypes.string,
  animals: PropTypes.array,
  selectAnimal: PropTypes.func
};

export default pure(AnimalList);