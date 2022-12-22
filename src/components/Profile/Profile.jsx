import React from 'react';

function Profile({ children, name, email }) {
  return (
    <>
      {children}
      <div className="profile">
        <h1 className="profile__title">Привет, {name}</h1>
        <div className="profile__table">
          <div className="profile__table-row">
            <p className="profile__table-text">Имя</p>
            <p className="profile__table-text">{name}</p>
          </div>
          <div className="profile__table-divider"></div>
          <div className="profile__table-row">
            <p className="profile__table-text">E-mail</p>
            <p className="profile__table-text">{email}</p>
          </div>
        </div>
        <div className="link profile__button">Редактировать</div>
        <div className="link profile__button profile__button_type_logout">
          Выйти из аккаунта
        </div>
      </div>
    </>
  );
}

export default Profile;
