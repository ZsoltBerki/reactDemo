import React, {PropTypes} from 'react';
import AnimalList from '../components/AnimalList';
import AnimalDetails from '../components/AnimalDetails';
import styles from './styles.scss';
import {pure} from 'recompose';

const AnimalsView = ({animals, selectAnimal,
  selectedAnimal, nameFilter, setNameFilter}) => {

  return <section>
    <section className="row">
      <div className="col-sm-1" />
      <div className="col-sm-10">
        <h1>Happy fun with animals</h1>
      </div>
      <div className="col-sm-1" />
    </section>

    <section className="row">
      <div className="col-sm-1" />
      <div className="col-sm-10">
        <section className="row">
          {selectedAnimal ?
            <div className="col-sm-12">
              <AnimalDetails
                name={selectedAnimal.name}
                description={selectedAnimal.description} />
              <button onClick={() => selectAnimal(null)}>Go back</button>
            </div> :
            <div>
              <input
                type="text"
                name="search"
                value={nameFilter}
                onChange={event => setNameFilter(event.target.value)}
              />
              <AnimalList
                itemClass={'col-sm-6'}
                animals={animals}
                selectAnimal={selectAnimal}
              />
            </div>
          }
        </section>
      </div>
      <div className="col-sm-1" />
    </section>
  </section>
};

AnimalsView.propTypes = {
  animals: PropTypes.array,
  selectedAnimal: PropTypes.object,
  selectAnimal: PropTypes.func,
  nameFilter: PropTypes.string,
  setNameFilter: PropTypes.func
};

export default pure(AnimalsView);
