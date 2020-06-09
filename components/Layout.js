import React, { useState } from 'react'

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
    return (
        <section style = { styles.container }>
             <FontAwesomeIcon
                icon = { [ 'fal', 'bars' ] } 
                style = { styles.icon } />
            { children }
        </section>
    )
}

export default Layout