import React, { useState } from 'react'

import Menu from './UI/Menu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        top: '3vh',
        left: '2vw',
        zIndex: '1',
        cursor: 'pointer',
        fontSize: '1.2rem',
        color: 'white'
    }
}

const Layout = ({ children }) => {
    const [ showMenu, setShowMenu ] = useState(false)

    return (
        <section style = { styles.container }>
            { showMenu ? <Menu setShowMenu = { setShowMenu } /> : null }
             <FontAwesomeIcon
                icon = { [ 'fal', 'bars' ] } 
                style = { styles.icon }
                onClick = { () => setShowMenu(true) } />
            { children }
        </section>
    )
}

export default Layout