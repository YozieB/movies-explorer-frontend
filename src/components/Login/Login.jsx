import EntryComponent from '../EntryComponent/EntryComponent';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function Login(props) {
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', {
    isEmpty: true,
    minLength: 2,
  });
  return (
    <div className="register">
      <EntryComponent title="Рады видеть!" />
      <form action="#" name="login" className="register__form">
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
            disabled={!email.inputValid || !password.inputValid}
            className="register__form-submit"
            type="submit"
          >
            Войти
          </button>
          <p className="register__form-check">
            Еще не зарегистрированы?{' '}
            <Link className="register__form-link" to="/signup">
              Регистрация
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
