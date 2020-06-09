import React from 'react'

import Search from './Search'

import classes from './Header.module.css'

const Header = () => (
    <header className = { classes.Header }>
        <h1 className = { classes.Heading }>Offpost</h1>
        <p className = { classes.SubHeading }>Where Bold Ideas Live</p>
        <Search />
    </header>
)

export default Header