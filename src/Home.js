import React from 'react';
import Header from './Header'
import logo from './images/BeLogo.png'


function Home() {
  return <div >
      <Header />
      <section className='hero'>
      <div className='headline animationUp'>Bienvenue à <img  className="log"src={logo}/> bank.</div>
      <div className='line headline'>_______________________________________</div>
      <div className='single-animation'>
      <h6 className='headline1'>Type de Transaction : </h6>
      <div className='buttons'><a href="/form1" className="btn1 cta-btn">Par Espèce</a><a href="/form2"  className="btn2 cta-btn">Par Débit de Compte</a></div>
          </div>
      
      
      </section>
  </div>;
}

export default Home;
