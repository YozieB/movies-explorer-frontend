import React from 'react';
import NavTab from '../NavTab/NavTab';

function AboutProject() {
  return (
    <div className="about">
      <NavTab title="О проекте" />
      <div className="about__info">
        <div className="about__info-item">
          <h4 className="about__info-title">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__info-item">
          <h4 className="about__info-title">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__graph">
        <div className="about__graph-item">
          <div className="about__graph-fill">1 неделя</div>
          <div className="about__graph-text">Back-end</div>
        </div>
        <div className="about__graph-item">
          <div className="about__graph-fill">4 недели</div>
          <div className="about__graph-text">Front-end</div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
