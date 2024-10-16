import React from "react";

export const Cards = (props) => {
  return (
    <div className="card">
      <img src="Rectangle 77.png" alt="" className="img-card" />
      <div className="card-content">
        <h3 className="deestiny">
          <span>
            <img src="Fill 219.png" alt="icono mundo" />
            {props.info.pais}
          </span>
          <a href={props.info.link} target="_blank">View on Google Maps</a>
        </h3>
        <h2>{props.info.destino}</h2>
        <span className="date">{props.info.fecha}</span>
        <p className="description">
            {props.info.descripcion}
        </p>
      </div>
      {/* {props.info.divertido && <div>Es muy divertido</div>} */}
      {props.info.divertido ? <h2>😆</h2>:<h2>🥱</h2>}
    </div>
  );
};
