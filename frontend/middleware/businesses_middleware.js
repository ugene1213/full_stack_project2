import { REQUEST_BUSINESS, REQUEST_BUSINESSES, RECEIVE_BUSINESSES,
      CREATE_REVIEW, receiveBusiness, receiveBusinesses
      } from '../actions/business_actions';

import { fetchBusinesses, fetchBusiness, createReview } from '../util/business_api_util';



const BusinessesMiddleware = ({ getState, dispatch }) => next => action => {

  const success1 = (businesses) => dispatch(receiveBusinesses(businesses));
  const success2 = (business) => dispatch(receiveBusiness(business));

  switch(action.type) {
    case REQUEST_BUSINESSES:
      fetchBusinesses(success1);
      return next(action);
    case REQUEST_BUSINESS:
      fetchBusiness(action.id, success2);
      return next(action);
    case CREATE_REVIEW:
      createReview(success2, action.review);
      break;
    default:
      return next(action);

  }
};

export default BusinessesMiddleware;
