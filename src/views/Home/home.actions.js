import { appConstants } from '../../_redux/constants.js';

export const homeActions = {
  updateMessage
};

function updateMessage(message) {
  return { type: appConstants.UPDATE_MESSAGE, message };
}
