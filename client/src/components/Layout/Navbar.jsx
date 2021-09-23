import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/img/RomaDomaLogo.svg';

import CartContext from '../../contexts/cart-context';

const pagesRoutes = [
  '/about',
  '/our-team',
  '/pricing-plans',
  '/search',
  '/contact',
  '/faqs',
  '/login',
  '/register',
  '/my-account',
  '/error-404',
  '/tracking-order',
  '/compare',
  '/terms-of-service',
  '/privacy-policy',
];
const shopRoutes = [
  '/shop',
  '/shop-list-view',
  '/shop-left-sidebar',
  '/shop-right-sidebar',
  '/shop-full-width',
  '/cart',
  '/wishlist',
  '/checkout',
  '/products-details',
  '/products-details-sidebar',
];
const blogRoutes = [
  '/blog',
  '/blog-list-view',
  '/blog-left-sidebar',
  '/blog-right-sidebar',
  '/blog-full-width',
  '/blog-details',
];
const productsRoutes = ['/products', '/add-product'];

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const cartContext = useContext(CartContext);
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleHotline = () => {
    setActive(!active);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 90) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, handleScroll]);

  return (
    <div className={`navbar-area ${visible ? 'is-sticky sticky-active' : ''}`}>
      <div className={showMenu ? 'main-navbar show' : 'main-navbar'}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">

            <div className="logo">
              <Link to={'/'}><img src={logo} alt="image" /></Link>
            </div>
            <ul className="navbar-nav responsive-menu">
              <li className="nav-item megamenu">
                <NavLink
                    to="/about"
                    isActive={() => pagesRoutes.includes(pathname)}
                    className="nav-link"
                >
                  Игрушки по категориям <i className="bx bx-chevron-down chevron-display"></i>
                  <span className="plus_icon">+</span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <ul className="megamenu-submenu">

                            <li>
                              <NavLink to={'/shop/camera'} className="nav-link">
                                <i className="flaticon-camera"></i>
                                Cameras
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={'/about'} className="nav-link">
                                About Us
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to={'/our-team'} className="nav-link">
                                Our Team
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                  to={'/pricing-plans'}
                                  className="nav-link"
                              >
                                Pricing Plans
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to={'/search'} className="nav-link">
                                Search
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to={'/contact'} className="nav-link">
                                Contact Us
                              </NavLink>
                            </li>
                          </ul>
                        </div>

                        <div className="col">
                          <ul className="megamenu-submenu">
                            <li>
                              <NavLink to={'/faqs'} className="nav-link">
                                FAQ's
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/my-account" className="nav-link">
                                My Account
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/error-404" className="nav-link">
                                404 Error
                              </NavLink>
                            </li>
                          </ul>
                        </div>

                        <div className="col">
                          <ul className="megamenu-submenu">
                            <li>
                              <NavLink
                                  to="/tracking-order"
                                  className="nav-link"
                              >
                                Tracking Order
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/compare" className="nav-link">
                                Compare
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                  to="/terms-of-service"
                                  className="nav-link"
                              >
                                Terms Of Service
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                  to="/privacy-policy"
                                  className="nav-link"
                              >
                                Privacy Policy
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/coming-soon" className="nav-link">
                                Coming Soon
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item eco">
                <NavLink to="/eco" className="nav-link">
                  Эко
                </NavLink>
                <span className="ecoIcon"></span>
              </li>

              <li className="nav-item">
                <NavLink
                    to="/blog"
                    isActive={() => blogRoutes.includes(pathname)}
                    className="nav-link"
                >
                  Для родителей <i className="bx bx-chevron-down chevron-display"></i>
                  <span className="plus_icon">+</span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink to="/blog" className="nav-link">
                      Blog
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/blog-list-view" className="nav-link">
                      Blog List View
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/blog-left-sidebar" className="nav-link">
                      Blog Left Sidebar
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/blog-right-sidebar" className="nav-link">
                      Blog Right Sidebar
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/blog-full-width" className="nav-link">
                      Blog Full Width
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/blog-details" className="nav-link">
                      Blog Details
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Контакты
                </NavLink>
              </li>




            </ul>
            <div className="others-option d-flex align-items-center">
              <div className="option-item respo-nav">
                <div>
                 <span className="relative">
                    <Link to="/cart">
                      <div className="cartIcon"></div>
                      {cartContext.cartItems && cartContext.cartItems.length > 0 && (
                          <span className="cartCounter">{cartContext.cartItems.length}</span>
                      )}
                    </Link>
                  </span>
{/*

                  <NavLink to="/cart" className="nav-link">
                    {cartContext.cartItems &&
                    cartContext.cartItems.reduce((count, curItem) => {
                      return (
                          count +
                          parseInt(curItem.price) * parseInt(curItem.quantity || 0)
                      );
                    }, 0)}
                  </NavLink>
*/}

                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="others-option-for-responsive">
        <div className="container">
          <div className="responsive-logo">
            <Link to={'/'}><img src={logo} alt="image" /></Link>
          </div>

          <div className="hamburger-menu" onClick={() => toggleMenu()}>
            {showMenu ? (
              <span className="x-icon">x</span>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
