import React, {useState} from 'react';
import classnames from 'classnames';
import scrollInToView from 'scroll-into-view';
import {StyledHeader} from "./styled";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleClickBurgerButton = () => {
    setOpen(!open);
  };

  const handleClickMenuItem = e => {
    e.preventDefault();
    const target = document.querySelector(e.target.hash);

    setActiveLink(e.target.hash);
    setOpen(!open);
    scrollInToView(target, {});
  };

  return <StyledHeader>
    <nav className={classnames("nav-wrap", {'open': open})}>
      <ul className='nav-list'>
        {navList.map(item => {
          return <li key={item.href} className='nav-list__item'>
            <a onClick={handleClickMenuItem} className={classnames('link', {'active': activeLink === item.href})} href={item.href}>{item.label}</a>
          </li>
        })}
      </ul>
    </nav>
    <button
      className={classnames("burger-menu", {'open': open})}
      onClick={handleClickBurgerButton}>
      <span className="burger-menu__item"/>
      <span className="burger-menu__item"/>
      <span className="burger-menu__item"/>
    </button>
  </StyledHeader>
};

const navList = [
  {
    label: 'Личная информация',
    href: '#personal-information'
  },
  {
    label: 'Опыт',
    href: '#experience'
  },
  {
    label: 'JavaScript',
    href: '#javascript'
  },
  {
    label: 'О себе',
    href: '#about'
  },
];