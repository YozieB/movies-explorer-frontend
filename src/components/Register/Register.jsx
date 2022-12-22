import EntryComponent from '../EntryComponent/EntryComponent';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function Register() {
  const name = useInput('', { isEmpty: true, minLength: 2 });
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', {
    isEmpty: true,
    minLength: 2,
  });
  return (
    <div className="register">
      <EntryComponent title="Добро пожаловать!" />
      <form action="#" name="register" className="register__form">
        <label htmlFor="#" className="register__form-field">
          <div className="register__form-error">
            {name.isDirty &&
              (name.isEmpty || name.minLengthError) &&
              'Некорректное имя'}
          </div>
          <input
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
            value={name.value}
            type="text"
            className="register__input"
            name="text"
            placeholder=" "
            minLength="2"
            required
          />
          <span className="register__form-placeholder">Имя</span>
        </label>
        <label htmlFor="#" className="register__form-field">
          <div className="register__form-error">
            {email.isDirty &&
              (email.isEmpty || email.minLengthError || email.emailError) &&
              'Некорректный email'}
          </div>
          <input
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            value={email.value}
            type="email"
            className="register__input"
            name="email"
            placeholder=" "
            required
          />
          <span className="register__form-placeholder">E-mail</span>
        </label>
        <label htmlFor="#" className="register__form-field">
          <div className="register__form-error">
            {password.isDirty &&
              (password.isEmpty || password.minLengthError) &&
              'Некорректный пароль'}
          </div>
          <input
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur(e)}
            value={password.value}
            type="password"
            className="register__input"
            name="password"
            placeholder=" "
            required
          />
          <span className="register__form-placeholder">Пароль</span>
        </label>
        <div className="register__form-buttons">
          <button
            disabled={
              !email.inputValid || !name.inputValid || !password.inputValid
            }
            className="register__form-submit"
            type="submit"
          >
            Зарегистрироваться
          </button>
          <p className="register__form-check">
            Уже зарегистрированы?{' '}
            <Link className="register__form-link" to="/signin">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
