import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems.js'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <nav>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
)

export default toolbar