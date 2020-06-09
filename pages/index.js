import React from 'react'

import Header from '../components/Header'
import PostList from '../components/PostList'

const styles = {
    container: {
        height: '100%',
        width: '100%',
        display: 'flex'
    }
}

const Index = () => (
    <div style = { styles.container }>
        <Header />
        <PostList />
    </div>
)

export default Index