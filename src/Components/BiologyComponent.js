import React from 'react'

function BiologyComponent() {
  return (
    <div style={{display:"flex",padding:"5vw",marginTop:"0.5vw",flexWrap:"wrap"}}>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh"src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MarsCuriosityRover-Drilling-Sol170%2B%2B-2.jpg/300px-MarsCuriosityRover-Drilling-Sol170%2B%2B-2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Astro Biology</h5>
          <p className="card-text">
          Astrobiology is a scientific field within the life and environmental sciences that...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Spongiform_degeneration_in_Creutzfeldt-Jakob_disease.jpg/450px-Spongiform_degeneration_in_Creutzfeldt-Jakob_disease.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Prions</h5>
          <p className="card-text">
          A prion /ˈpriːɒn/ (listen) is a misfolded protein that can transmit its misfolded...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Blausen_0316_DigestiveSystem.png/375px-Blausen_0316_DigestiveSystem.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Digestion</h5>
          <p className="card-text">
          Digestion is the breakdown of large insoluble food molecules into small water-soluble...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hybridogenesis_in_water_frogs_gametes.svg/225px-Hybridogenesis_in_water_frogs_gametes.svg.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Genetics</h5>
          <p className="card-text">
          Genetics is the study of genes, genetic variation, and heredity in organisms...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bufo_boreas.jpg/240px-Bufo_boreas.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Ecology</h5>
          <p className="card-text">
          Ecology (from Ancient Greek οἶκος (oîkos) 'house', and -λογία (-logía) 'study of')[A] is...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Vesalius-copy.jpg/206px-Vesalius-copy.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Anatomy</h5>
          <p className="card-text">
          Anatomy (from Ancient Greek ἀνατομή (anatomḗ) 'dissection') is the branch of biology...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

    </div>
  )
}

export default BiologyComponent