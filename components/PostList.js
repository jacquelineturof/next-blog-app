import React, { useState } from 'react'

import Backdrop from './UI/Backdrop'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './PostList.module.css'

const POSTS = [
    {
        id: 1,
        title: "First Post",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Diam phasellus vestibulum lorem sed risus. Risus in hendrerit gravida rutrum quisque. Non blandit massa enim nec dui. Non tellus orci ac auctor augue mauris augue. Pellentesque id nibh tortor id. Sem nulla pharetra diam sit. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pharetra pharetra massa massa ultricies. Ut enim blandit volutpat maecenas volutpat. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Purus ut faucibus pulvinar elementum integer enim. Scelerisque in dictum non consectetur. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Et malesuada fames ac turpis egestas. Auctor elit sed vulputate mi sit amet mauris commodo quis.\nLaoreet sit amet cursus sit amet dictum sit amet justo. Lectus sit amet est placerat in egestas. Volutpat sed cras ornare arcu dui. Non consectetur a erat nam at lectus. Cras sed felis eget velit aliquet sagittis id consectetur purus. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. A pellentesque sit amet porttitor eget dolor morbi non. Nunc vel risus commodo viverra maecenas accumsan lacus. Sagittis purus sit amet volutpat consequat mauris. Vel turpis nunc eget lorem dolor. Molestie at elementum eu facilisis sed odio morbi. Etiam sit amet nisl purus in. Massa vitae tortor condimentum lacinia quis vel eros.",
        date: "6/9/2020",
        comments: [
            {
                id: 1,
                user: "AUser",
                text: "This is a comment",
                date: "6/9/2020"
            }
        ]
    },
    {
        id: 2,
        title: "Second Post",
        body: "This is our post body",
        date: "6/9/2020",
        comments: [
            {
                id: 2,
                user: "AUser",
                text: "This is a comment",
                date: "6/9/2020"
            },
            {
                id: 3,
                user: "DifferentUser",
                text: "This is another comment",
                date: "6/9/2020"
            }
        ]
    }
]

const Comment = ({ comment }) => (
    <div className = { classes.Comment }>
        <p>{ comment.text }</p>
        <div className = { classes.CommentInfoRow }>
            <p className = { classes.CommentUser }>{ comment.user }</p>
            <p className = { classes.CommentDate }>{ comment.date }</p>
        </div>
    </div>
)

const Post = ({ title, comments, date, clicked }) => (
    <div className = { classes.Post } onClick = { clicked }>
        <h1 className = { classes.PostTitle }>{ title }</h1>
        <div className = { classes.PostInfoRow }>
            <p className = { classes.PostDate }>{ date }</p>
            <p className = { classes.PostCommentCount }>
                <FontAwesomeIcon 
                    icon = { [ 'fad', 'comments' ] } 
                    className = { classes.PostCommentsIcon } /> 
                { comments.length + " " } 
                { comments.length === 1 ? 'comment' : 'comments' }
            </p>
        </div>
    </div>
)

const FullScreenPost = ({ post }) => (
    <div className = { classes.FullScreenPost }>
        <div className = { classes.PostContent }>
            <h1 className = { classes.PostContentTitle }>{ post.title }</h1>
            { 
                post.body.split('\n').map((item, i) => 
                    <p key={i} className = { classes.Paragraph}>{item}</p>)
            }
        </div>
        <div className = { classes.Comments }>
            <h5 className = { classes.Label }>Comments</h5>
            { post.comments.map(comment => 
                <Comment key = { comment.id } comment = { comment } />)}
        </div>
    </div>
)

const PostList = () => {
    const [ currentPost, setCurrentPost ] = useState(null)
    
    return (
        <section className = { classes.PostList }>
            <Backdrop 
                show = { currentPost !== null } 
                clicked = { () => setCurrentPost(null)} />
            { currentPost !== null ? <FullScreenPost post = { currentPost } /> : null }
            { POSTS.map(post => (
                <Post
                    clicked = { () => setCurrentPost(post) } 
                    key = { post.index }
                    title = { post.title }
                    comments = { post.comments }
                    date = { post.date }  />
            ))}
        </section>
    )
}

export default PostList