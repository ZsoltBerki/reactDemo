import { connect } from 'react-redux';
import { API } from '../module/index';
import AnimalsView from '../views/AnimalsView';

const mapActionCreator = {
  ...API
};

const mapStateToProps = state => ({
  animals: state.animals
    .filter(animal => animal.name.toLowerCase().includes(state.nameFilter.toLowerCase()))
    .map(animal => ({
        ...animal,
         description: animal.description.length > 100 ?
           animal.description.substring(0,100) + '...' :
           animal.description
      })
    ),
  selectedAnimal: state.selectedAnimal &&
    state.animals.find(animal => animal.id === state.selectedAnimal.id),
  nameFilter: state.nameFilter
});

export default connect(
  mapStateToProps,
  mapActionCreator
)(AnimalsView);
