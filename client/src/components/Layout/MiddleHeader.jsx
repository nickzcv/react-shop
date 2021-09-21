import { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';

import CartContext from '../../contexts/cart-context';
import logo from '../../assets/img/logo.png';
import './MiddleHeader.scss';

function MiddleHeader({ history }) {
  const context = useContext(CartContext);

  return (
    <div className="middle-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="middle-header-logo">
              <Link to="/">
                <img src={logo} alt="image" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">

          </div>

          <div className="col-lg-3">
            <ul className="middle-header-optional">
              <li>
                <Link to="/cart">
                  <i className="flaticon-shopping-cart"></i>
                  {context.cartItems && context.cartItems.length > 0 && (
                    <span>{context.cartItems.length}</span>
                  )}
                </Link>
              </li>
              <li>
                $
                {context.cartItems &&
                  context.cartItems.reduce((count, curItem) => {
                    return (
                      count +
                      parseInt(curItem.price) * parseInt(curItem.quantity || 0)
                    );
                  }, 0)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MiddleHeader);
