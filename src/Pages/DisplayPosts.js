import '../App.css'
import React from 'react';
import { useState, useEffect } from 'react'
import { listPosts } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

export const DisplayPosts = () => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [ posts, setPosts] = useState([]);

    const loadPosts = async () => {
        
        setIsLoading(true);
        
        const response = await API.graphql( graphqlOperation(listPosts))
        
        console.log( 'All Posts', JSON.stringify( response.data.listPosts.items ) )
        
        setPosts( response.data.listPosts.items);
        
        setIsLoading(false);
    }
    
    useEffect( () => {
        loadPosts()
      },
      []
    )
    
    console.log( isLoading )
    console.log( 'Posts', posts )
    
    return posts.map( ( post ) => {
          return (
            <div className="posts" key={ post.id } >
              <h1>{post.postTitle}</h1>
              <p>{post.postBody}</p>
            </div>
          )
        }
    )
    
}
