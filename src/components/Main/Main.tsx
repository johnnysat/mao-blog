import React from 'react';
import './Main.css';

export default function Main() {
  return(
    <div className="main__content">
    <img className="banner__img" src="https://fakeimg.pl/300x150/" />
    <h1 className="main__title">Postagem Principal</h1>
    <p className="main__resume">Um resumo da postagem principal, apenas uma parte do primeiro parágrafo. Algo a ser considerado
      ainda. Estou escrevendo apenas para testar.
    </p>
    </div>
  )
}