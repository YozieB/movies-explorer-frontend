import React from 'react';
import NavTab from '../NavTab/NavTab';
import image from '../../images/student.jpg';
function AboutMe(props) {
  return (
    <div className="student">
      <NavTab title="Студент" />
      <div className="student__content">
        <div className="student__info">
          <h3 className="student__title">Алексей</h3>
          <h4 className="student__subtitle">Фронтенд-разработчик, 22 года</h4>
          <p className="student__text">
            Интересуюсь веб-разработкой еще со школы. Тогда получилось создать
            школьный сайт на движке DLE. В то время информации было немного, и
            разобраться школьнику было сложно. Поэтому я забросил свое увлечение
            и поступил в университет. На последнем курсе учебы снова вернулся к
            веб-разработке и стал активно самообучаться, чем занимаюсь и по сей
            день. Переодически беру заказы на фриланс-биржах, а так же ищу
            постоянную работу на позицию Фронтенд-разработчика.
          </p>
          <a
            className="student__link"
            href="https://github.com/yozieb"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="student__photo" src={image} alt="Студент" />
      </div>
    </div>
  );
}

export default AboutMe;
