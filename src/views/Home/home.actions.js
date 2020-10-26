import { dashboardConstants } from '../../_redux/constants.js';

export const homeActions = {
  updateMessage
};

function updateMessage(message) {
  return { type: dashboardConstants.UPDATE_MESSAGE, message };
}
