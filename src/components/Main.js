function Main() {
  return (
    <>
      <main>
        <section className="box-titulo">
          <h1>Growdev</h1>
          <p>
            Trabalhando com ReactJS, é uma Biblioteca Javascript para criar SPAs
          </p>

          <button
            class="btn"
            href="http://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Site Oficial
          </button>
        </section>
        <section className="box-requisitos">
          <h2>Requisitos</h2>
          <div class="gearbox">
            <div class="overlay"></div>
            <div class="gear one">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
            <div class="gear two">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
            <div class="gear three">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
            <div class="gear four large">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
          </div>
            <div class="loader"></div>
          <p>Veja abaixo os requisitos mínimos para aprender React JS</p>
          <div className="box-cards">
            <div className="card">
              <h3>HTML</h3>
              <p>Aprender a estrururar os elementos da página com HTML</p>
            </div>
            <div className="card">
              <h3>CSS</h3>
              <p>Aprender a estrururar os elementos da página com CSS</p>
            </div>
            <div className="card">
              <h3>JAVASCRIPT</h3>
              <p>Aprender a linguagem utilizada pelo REACT JS, o Javascript</p>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
}

export default Main;
