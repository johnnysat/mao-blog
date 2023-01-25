import React from 'react';
import './Feed.css';
import ItemFeed from './ItemFeed/ItemFeed'

export default function Feed(){
  return(
    <div className="feed__content">
      <ItemFeed />
      <ItemFeed />
      <ItemFeed />
      <ItemFeed />
      <ItemFeed />
    </div>
  )
}