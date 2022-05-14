import { useState } from 'react';

import { useScroll } from '@/hooks/useScroll';

import Link from 'next/link';

import cx from 'classnames';

import { VscChromeClose, VscFileSubmodule } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';

export function Header() {
  const [toggle, setToggle] = useState(false);
  const { scrollY } = useScroll();

  const menuItens = [
    { name: `Home`, slug: `/` },
    { name: `Portifólios`, slug: `/portifolios` },
    { name: `Dar Feedback`, slug: `/feedback` },
  ];

  return (
    <Container scroll={scrollY}>
      <div className="wrapper">
        <div className="logo">
          <VscFileSubmodule color="#258AFF" size={30} />
          MPortfolio
        </div>
        <nav className={cx({ toggle })}>
          <VscChromeClose
            onClick={() => setToggle(false)}
            className="close show-mobile"
            size={30}
          />

          <div className="logo-mobile show-mobile">
            <VscFileSubmodule color="#258AFF" size={30} />
            MPortfolio
          </div>
          <ul>
            {menuItens.map((item) => (
              <li key={item.name}>
                <Link href={item.slug}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={() => setToggle(false)}
          className={cx(`overlay`, { toggle })}
        ></div>

        <button>Começar</button>
        <FiMenu
          onClick={() => setToggle((state) => !state)}
          className="menu-icon show-mobile"
          size={30}
        />
      </div>
    </Container>
  );
}
