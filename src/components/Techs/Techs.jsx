import React from 'react';
import NavTab from '../NavTab/NavTab';

function Techs() {
  return (
    <div className="techs">
      <div className="techs__content">
        <NavTab title="Технологии" />
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__cards">
          <div className="techs__card">HTML</div>
          <div className="techs__card">CSS</div>
          <div className="techs__card">JS</div>
          <div className="techs__card">React</div>
          <div className="techs__card">Git</div>
          <div className="techs__card">Express.js</div>
          <div className="techs__card">mongoDB</div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
