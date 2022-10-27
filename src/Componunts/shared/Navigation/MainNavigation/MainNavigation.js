import React from 'react';

import MainHeader from '../MainHeader/MainHeader';

import './MainNavigation.css';

const MainNavigation = () => {

  return (

      <MainHeader>
        <h1 className='main-navigation__title'>
          Tanuki 2.0
        </h1>
        <nav className='main-navigation__header-nav'>
        </nav>
      </MainHeader>
  )
}

export default MainNavigation