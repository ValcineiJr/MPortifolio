import { useScroll } from '@/hooks/useScroll';
import { useEffect, useState } from 'react';
import { Container } from './styles';

export function Header() {
  const { scrollY } = useScroll();

  return (
    <Container scroll={scrollY}>
      <nav>
        {/* <ul className="site-menu-main">
          <li className="nav-item nav-item-has-children">
            <a href="#2" className="nav-link-item drop-trigger">
              Dropdowns <i className="fas fa-angle-down"></i>
            </a>
            <ul className="sub-menu" id="submenu-9">
              <li className="sub-menu--item">
                <a href="3#">Dropdown 01</a>
              </li>
              <li className="sub-menu--item">
                <a href="#4">Dropdown 02</a>
              </li>
              <li className="sub-menu--item">
                <a href="#5">Dropdown 03</a>
              </li>
              <li className="sub-menu--item">
                <a href="#6">Dropdown 04</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#7" className="nav-link-item">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://uxtheme.net/product-support/"
              className="nav-link-item"
            >
              Support
            </a>
          </li>
        </ul> */}
      </nav>
    </Container>
  );
}
