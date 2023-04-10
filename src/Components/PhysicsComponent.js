import React,{useState,useEffect} from 'react'


function showPhysicsComponent() {
  
    

 
  
  return (
    <div style={{display:"flex",padding:"5vw",marginTop:"0.5vw",flexWrap:"wrap"}}>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/US_Navy_040501-N-1336S-037_The_U.S._Navy_sponsored_Chevy_Monte_Carlo_NASCAR_leads_a_pack_into_turn_four_at_California_Speedway.jpg/1280px-US_Navy_040501-N-1336S-037_The_U.S._Navy_sponsored_Chevy_Monte_Carlo_NASCAR_leads_a_pack_into_turn_four_at_California_Speedway.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Velocity</h5>
          <p className="card-text">
          Velocity is the directional speed of an object in motion as an indication of its rate of change in position as observed from a particular...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Energy_Arc_%28central_electrode_of_a_Plasma_Lamp%29.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Energy</h5>
          <p className="card-text">
          In physics, energy (from Ancient Greek ἐνέργεια (enérgeia) 'activity') is the quantitative property...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img height="200vw" src="https://th-thumbnailer.cdn-si-edu.com/JbCAKzcGwntsCBQ070larxtC10o=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/9d/02/9d02fd07-b2b0-4ae4-afbb-65bef25d86a0/42-46209404.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Quantum Physics</h5>
          <p className="card-text">
          In physics, a quantum (plural quanta) is the minimum amount of any physical entity (physical property)...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Motor_cycle_stunt2_amk.jpg/450px-Motor_cycle_stunt2_amk.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Motion</h5>
          <p className="card-text">
          In physics, motion is the phenomenon in which an object changes its position with respect to time and...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Kinesin_walking.gif/330px-Kinesin_walking.gif" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">BioPhysics</h5>
          <p className="card-text">
          Biophysics is an interdisciplinary science that applies approaches and methods traditionally used in...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem;",margin:"2.5vw",marginTop:"0.5vw",width: "calc(33.33% - 5vw)"}}>
        <img src="https://i.guim.co.uk/img/media/dbd8fa31e31af3a2cf0069c11056ec75a97beedb/0_543_4800_2880/master/4800.jpg?width=620&quality=45&dpr=2&s=none" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">AstroPhysics</h5>
          <p className="card-text">
          Astrophysics is a science that employs the methods and principles of physics and chemistry in the study...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

    </div>
  );
}

export default showPhysicsComponent;
