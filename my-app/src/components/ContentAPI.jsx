import React, { Component } from 'react';

import css from "./css/Content.module.css";

import { PostItemAPI } from './PostItemAPI';
import Loader from './Loader';

import axios from "axios";
import API_KEY from "../secrets";

export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        posts: [],
        response: null,
        savedPosts: [],
      }
    }

    componentDidMount() {
      this.fetchImages();
    }

    fetchImages = async () => {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
      const fetchedPosts = response.data.hits;
      this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
      })
    }

    handleChange = (event) => {
      const inputText = event.target.value.toLowerCase();
      const filteredPosts = this.state.savedPosts.filter((post) => {
        return post.user.toLowerCase().includes(inputText);
      });
      
      this.setState({
        posts: filteredPosts,
      })
    }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form action="">
            <input onChange={(event) => this.handleChange(event)} type="search" id="seachInput" />
          </form>
          <h4>Posts found {this.state.posts.length}</h4>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ? <PostItemAPI posts={this.state.posts}/> : <Loader />
          }            
        </div>
      </div>
    )
  }
}

export default Content