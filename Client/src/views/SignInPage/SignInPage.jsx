import {useState} from 'react';
import styles from './SignInPage.module.css';
import Topbar from '../../components/Topbar/Topbar';
import PopUp from '../../components/PopUp/PopUp';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorList, setErrorList] = useState({});
  const [secondPassword, setSecondPassword] = useState('');
  const [triggerPopUp, setTriggerPopUp] = useState(false);

  const validate = (value) => {
    const regex = /[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,4}/;
    const errors = {};
    if (!value.userEmail || !regex.test(value.userEmail)) errors.userEmail = 'Debe introducir un email válido.';
    if (value.userPassword.length < 8 || value.userPassword > 16)
      errors.userPassword = 'Debe introducir una contraseña de entre 8 y 16 caracteres.';
    if (!value.userSecondPassword) errors.userSecondPassword = 'Debe introducir una contraseña';
    if (value.userSecondPassword !== value.userPassword) errors.userSecondPassword = 'Las contraseñas no coinciden.';
    return errors;
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const user = {
      userEmail: email,
      userPassword: password,
      userSecondPassword: secondPassword,
    };
    const result = validate(user);
    if (Object.keys(result).length) {
      setErrorList(result);
      return;
    }
    setErrorList({});
  };
  return (
    <div className={styles.register}>
      <PopUp trigger={triggerPopUp} setTrigger={setTriggerPopUp} />
      <Topbar />
      <div className={styles.registerInner}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Regístrate</h2>
          <div className={styles.formElement}>
            <div className={styles.box}>
              <label htmlFor="email">Introduce tu email:</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errorList.userEmail && <p>{errorList.userEmail}</p>}
            </div>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="password">Introduce una contraseña:</label>
            <div className={styles.box}>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorList.userPassword && <p>{errorList.userPassword}</p>}
            </div>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="password">Vuelve a introducir tu contraseña:</label>
            <div className={styles.box}>
              <input
                type="password"
                id="secondPassword"
                placeholder="Contraseña"
                value={secondPassword}
                onChange={(e) => setSecondPassword(e.target.value)}
              />
              {errorList.userSecondPassword && <p>{errorList.userSecondPassword}</p>}
            </div>
          </div>
          <div className={styles.formElement}>
            <button>Registrarse</button>
            <p>¿Ya tienes una cuenta?</p>
            <button
              onClick={() => {
                setTriggerPopUp(true);
              }}>
              Inicia Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
