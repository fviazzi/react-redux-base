import { dashboardConstants } from '../../_redux/constants.js';

const initialState = {
  message: "Hello from reducer :)"
};

export function home (state = initialState, action) {

  switch (action.type) {

    case dashboardConstants.UPDATE_MESSAGE:

      return action.message ? action : state;

    default:
      return state
  }
}
