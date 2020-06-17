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

const Index = ({ posts }) => (
    <div style = { styles.container }>
        <Header />
        <PostList posts = { posts } />
    </div>
)

Index.getInitialProps = async ctx => {
    const res = await fetch("http://localhost:3001/posts")
    const json = await res.json()
    return { posts: json.posts }
}

export default Index

