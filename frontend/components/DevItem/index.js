import React from 'react';

import './styles.css';

function DevItem({ dev }) {
  return(
    <li key={dev._id} className = "dev-item">
    <header>
      <img src={dev.avatar_url} alt={dev.name}></img>
      <div className="user-info">
      <strong>{dev.name}</strong>
      <span>{dev.techs}</span>
      </div>
    </header>
    <p>{dev.bio}</p>
    <a target="_blank" href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
  </li>
  );
}
export default DevItem;
