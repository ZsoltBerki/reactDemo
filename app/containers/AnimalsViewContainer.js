import { connect } from 'react-redux';
import { selectAnimal } from '../module/index';
import AnimalsView from '../views/AnimalsView';

const mapActionCreator = {
  select: selectAnimal
};

const mapStateToProps = state => ({
  selectedAnimal: state.selectedAnimal
});

export default connect(
  mapStateToProps,
  mapActionCreator
)(AnimalsView);
