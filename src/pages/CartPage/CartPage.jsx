import React from 'react';
// import PropTypes from 'prop-types';

// import s from './cartPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/cart/cart-action';

const CartPage = props => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteCart(id));
  };

  const elements = cart.map(({ id, name }) => (
    <li key={id}>
      <button type="button" onClick={() => onDelete(id)}>
        delete
      </button>
      <p>{name}</p>
    </li>
  ));

  return (
    <div>
      Cart content:
      <ul>{elements}</ul>
    </div>
  );
};

// CartPage.propTypes = {};

export default CartPage;
