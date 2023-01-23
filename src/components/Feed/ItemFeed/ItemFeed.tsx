import React from "react";
import './ItemFeed.css';

export default function ItemFeed(){
  return(
    <div className="feed__card">
    <img className="feed__image" src="https://fakeimg.pl/250x250/" />
    <h2 className="feed__tittle">Título</h2>
    <p className="feed__resume">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Interagi no mé</p>
    </div>
  )
}