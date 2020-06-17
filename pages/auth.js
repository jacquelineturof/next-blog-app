import React from 'react'

import Form from '../components/AuthForm'

const styles = {
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const auth = () => (
    <div style = { styles.container }>
        <Form />
    </div>
)

export default auth