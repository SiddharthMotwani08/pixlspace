"use client"

import React, { useEffect } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { addAllPost, postState, clearPosts } from '@/public/src/features/postSlice';
import PropTypes from 'prop-types';
import axios from 'axios';

const Posts = () => {
    const dispatch = useDispatch();
    const FACEBOOK_URL_ENDPOINT = "http://localhost:8080/api/v1/post";
    const sPost = useSelector(postState);
    useEffect(() => {
      const fetchData = () => {
        const response = axios.get(FACEBOOK_URL_ENDPOINT).then((response) => {
          dispatch(addAllPost(response.data))
        });
      };
      fetchData();
    }, [])
    
  return (
  <div>{sPost.map((post) => (<Post post={post} key={post.id}/>))}</div>
)
}

export default Posts 