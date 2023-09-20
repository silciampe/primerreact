import React from 'react'


function Usuario(props) {

    
  return (
    <div>
        <div className="card m-auto" style={{widht: "18rem"}}>
        <img src={props.imagen} className="card center-block offset-4 col-4"/>
        <div className="card-body"> 
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{props.cargo}</p>
            <a href="#" className="btn btn-primary">{props.conoceme}</a>
        </div>
    </div>


    </div>
  )
}

export default Usuario

