import React from 'react'
import {useEffect} from "react";
import {useRef} from "react";
import './App.css';

function App() {

  return (
      <div className="App">
          <div className='conte'>
              <h1 className="name">Gabriel Miranda</h1>

              <img src="/foto.png" alt="Minha foto" className="photo"/>

              <video controls className="video">
                  <source src="/video.mp4" type="video/mp4"/>
              </video>

              <audio autoPlay loop controls>
                  <source src="/musica.mp3" type="audio/mp3"/>
              </audio>

              <main>
                  <p className="rotina">
                      Acordo por volta das 8:00 da manhã. Em seguida, faço um café da manhã leve e começo a  <strong>trabalhar</strong> às
                          10:00
                          Durante o dia, faço pausas para almoçar, passar um café e fazer exercícios. À tarde, continuo
                          o  <strong>trabalho</strong> às
                          minhas tarefas até às 18:00. À noite, vou para <strong>faculdade</strong>. Chego em casa as 23:00 ou 23:30.
                          Após
                          chegar em casa, como algo e vou dormir.
                  </p>
              </main>
              <a href="/contato.html" className="contato-link">Contato</a>
          </div>
      </div>
  );
}

export default App;
