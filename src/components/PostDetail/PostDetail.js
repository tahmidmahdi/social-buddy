import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
    // console.log(post);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data));

    },[id])
    return (
       

        <div>
            <h3>Post Details {id}</h3>
            <p>User posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Number of Comments: {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;