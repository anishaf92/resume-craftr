import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';



const initialResumeState = {
  
  // Initialize other sections with their initial states
};

const store = createStore (rootReducer, initialResumeState);

export default store;
