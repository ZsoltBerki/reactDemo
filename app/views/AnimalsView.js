import React, {PropTypes} from 'react';
import {pure} from 'recompose';
import Button from '../components/Button/Button';

const AnimalsView = ({select, selectedAnimal}) => <section>
  The selected Animal is {selectedAnimal.name}
  <Button onClick={() => select({name: 'Dog'})}>Click me</Button>
  </section>;

AnimalsView.propTypes = {
  select: PropTypes.func,
  selectedAnimal: PropTypes.object
};

export default pure(AnimalsView);
