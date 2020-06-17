import React from 'react'
import { useSelector } from 'react-redux'

import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Menu.module.css'

const Menu = ({ setShowMenu }) => {
    const token = useSelector(state => state.auth.token)
    const isAdmin = useSelector(state => state.auth.isAdmin) 

    // set links user sees on if they are authenticated and if they are admin
    let links

    // authenticated user && admin
    // authenticated user && !admin
    // !authenticated user
    if (token !== null) {
        if (isAdmin) {
            links = (
                <>
                    <Link href="/">
                        <a 
                            className = { classes.Link }
                            onClick = { () => setShowMenu(false) }>
                            Create Blog
                        </a>
                    </Link>
                    <Link href="/">
                        <a 
                            className = { classes.Link }
                            onClick = { () => setShowMenu(false) }>
                            Logout
                        </a>
                    </Link>
                </>
            )
        } else {
            links = (
                <>
                    <Link href="/">
                        <a 
                            className = { classes.Link }
                            onClick = { () => setShowMenu(false) }>
                            Logout
                        </a>
                    </Link>
                </>
            )
        }
    } else {
        links = (
            <>
                <Link href="/auth">
                    <a 
                        className = { classes.Link } 
                        onClick = { () => setShowMenu(false) }>
                        Login
                    </a>
                </Link>
            </>
        )
    }

    return (
        <div className = { classes.Menu }>
            <FontAwesomeIcon
                icon = { [ 'fal', 'times' ] } 
                className = { classes.Icon }
                onClick = { () => setShowMenu(false) } />
            { links }
        </div>
    )
}

export default Menu