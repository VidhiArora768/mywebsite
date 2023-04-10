import React from 'react'

function ChemistryComponent() {
  return (
    <div style={{display:"flex",padding:"5vw",marginTop:"0.5vw",flexWrap:"wrap"}}>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/TOAT_AFM.png/330px-TOAT_AFM.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Molecules</h5>
          <p className="card-text">
          A molecule is a group of two or more atoms held together by attractive forces known as chemical bonds; depending...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Zn_reaction_with_HCl.JPG/330px-Zn_reaction_with_HCl.JPG" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Acid</h5>
          <p className="card-text">
          An acid is a molecule or ion capable of either donating a proton (i.e. hydrogen ion, H+), known as...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Helium_atom_QM.svg/450px-Helium_atom_QM.svg.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Atom</h5>
          <p className="card-text">
          An atom is a particle that consists of a nucleus of protons and neutrons surrounded by a...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Ice-calorimeter.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Thermo Chemistry</h5>
          <p className="card-text">
          Thermochemistry is the study of the heat energy which is associated with chemical reactions and...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Simple_Periodic_Table_Chart-blocks.svg/720px-Simple_Periodic_Table_Chart-blocks.svg.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Periodic Table</h5>
          <p className="card-text">
          The periodic table, also known as the periodic table of the (chemical) elements, is...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kochendes_wasser02.jpg/330px-Kochendes_wasser02.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Chemicals</h5>
          <p className="card-text">
          A chemical substance is a form of matter having constant chemical composition and characteristic...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

    </div>
  )
}

export default ChemistryComponent