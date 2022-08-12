import React, { Component, useEffect, useState } from 'react';

import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";

import { PostItem } from './PostItem';
import Loader from './Loader';

function ContentHooks(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setfetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(isLoaded => true);
            setfetchedPosts(savedPosts);
          }, 2000);
    },[]);

    const handleChange = (event) => {
      const inputText = event.target.value.toLowerCase();
      const filteredPosts = savedPosts.filter((post) => {
        return post.name.toLowerCase().includes(inputText);
      });
        setfetchedPosts(filteredPosts);
    };


    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form action="">
            <input onChange={(event) => handleChange(event)} type="search" id="seachInput" />
          </form>
          <h4>Posts found {fetchedPosts.length}</h4>
        </div>
        <div className={css.SearchResults}>
          {
            isLoaded ? <PostItem posts={fetchedPosts}/> : <Loader />
          }            
        </div>
      </div>
    );
}

export default ContentHooks