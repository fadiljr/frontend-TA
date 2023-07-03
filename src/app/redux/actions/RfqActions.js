import axios from 'axios';

export const GET_RFQ = 'GET_RFQ';

export const getListRfq = () => (dispatch) => {
  axios.get('/api/ecommerce/get-product-list').then((res) => {
    dispatch({
      type: GET_RFQ,
      payload: res.data,
    });
  });
};
