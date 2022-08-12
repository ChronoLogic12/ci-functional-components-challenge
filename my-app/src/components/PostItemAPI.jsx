import React from 'react'
import css from "./css/Content.module.css";

export const PostItemAPI = (props) => {
  return (
      props.posts.map((post) => {
                return  <div key={post.id} className={css.SearchItem}>
                        <p>{post.type}</p>
                        <p>{post.user}</p>
                        <img src={post.webformatURL} alt={post.tags} />
                        <p>{post.tags}</p>
                </div>
            })
  )
}
