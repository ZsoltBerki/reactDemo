import React, {PropTypes} from 'react';
import {pure} from 'recompose';
import Button from '../components/Button/Button';

const AnimalsView = ({select, selectedAnimal}) => {

  const triggerSelect = () => {
    select({name: 'Dog'});
  };

  return <section>
    The selected Animal is {selectedAnimal.name}
    <Button onClick={triggerSelect}>Click me</Button>
  </section>
};

AnimalsView.propTypes = {
  select: PropTypes.func,
  selectedAnimal: PropTypes.object
};

export default pure(AnimalsView);
