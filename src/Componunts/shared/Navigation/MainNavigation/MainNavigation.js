import React, {useState} from 'react';

import MainHeader from '../MainHeader/MainHeader';

import './MainNavigation.css';

const MainNavigation = props => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (

      <MainHeader>
        <h1 className='main-navigation__title'>
          Tanuki
        </h1>
        <nav className='main-navigation__header-nav'>
        </nav>
      </MainHeader>
  )
}

export default MainNavigation