// import { checkPropTypes } from 'prop-types';
import React from "react";
import "../stylesheets/layout/_card.scss";

function Card(props) {
  const { palettes, name, job, email, linkedin, github, phone } = props;
  //const palettes = props.palettes;
  //const name=props.name

  return (
    <article className={`card__data palette-${palettes}`}>
      <h2 className="card__data--title name ">{name || "Nombre Apellidos"}</h2>

      <h3 className="card__data--title job ">{job || "Front-end developer"}</h3>
      <div className="card__data--img  "></div>

      <ul className="card__data--list">
        <li className="circle">
          <a href={`tel:${phone}`} className="card__data--icon phone">
            <i className="fas fa-mobile-alt"></i>
          </a>
        </li>
        <li className="circle">
          <a
            href={
              email === "" ? "mailto:username@example.com" : `mailto:${email}`
            }
            className="card__data--icon email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="circle">
          <a
            href={`https://www.linkedin.com/in/${linkedin}`}
            className="card__data--icon linkedin"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="circle">
          <a
            href={`https://www.github.com/${github}`}
            className="card__data--icon github "
            target="_blank"
          >
            <i className="fab fa-github-alt"></i>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Card;
