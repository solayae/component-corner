import styles from './PopUp.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function PopUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorList, setErrorList] = useState({});

  const validate = (value) => {
    const regex = /[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,4}/;
    const errors = {};
    if (!value.userEmail || !regex.test(value.userEmail)) errors.userEmail = 'Debe introducir un email válido';
    if (!value.userPassword) errors.userPassword = 'Debe introducir una contraseña';
    return errors;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const user = {
      userEmail: email,
      userPassword: password,
    };
    const result = validate(user);
    if (Object.keys(result).length) {
      setErrorList(result);
      return;
    }
    setErrorList({});
  };

  return props.trigger ? (
    <div className={styles.popUp}>
      <div className={styles.popUpInner}>
        <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}>
          X
        </button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Inicia sesión</h2>
          <div className={styles.formElement}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Introduce tu email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p>{errorList.userEmail && <p style={{color: 'red', fontSize: '15px'}}>{errorList.userEmail}</p>}</p>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{errorList.userPassword && <p style={{color: 'red', fontSize: '15px'}}>{errorList.userPassword}</p>}</p>
          </div>
          <div className={styles.formElement}>
            <button>Iniciar Sesión</button>
            <p>¿No tienes una cuenta?</p>
            <Link to={'/registrarse'}>
              <button>Registrarse</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
}
PopUp.propTypes = {
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
};
