import styles from './PopUp.module.css';
import {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import {login, clearMessage} from '../../redux/actions';
import {isEmail} from 'validator';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const required = (value) => {
  if (!value) {
    return <div style={{color: 'red'}}>Este campo es obligatorio!</div>;
  }
};
const validatePassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return <div style={{color: 'red'}}>El password entre 8 y 40 characteres.</div>;
  }
};

const validateEmail = (value) => {
  if (!isEmail(value)) {
    return <div style={{color: 'red'}}>Este email no es valido</div>;
  }
};

export default function Login(props) {

  const form = useRef();
  const checkBtn = useRef();

  const [user, setUser] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onChangeUser = (e, type) => setUser({...user, [type]: e.target.value});

  const loginFunc = async (email, password) => {
    try {
      const response = await dispatch(login(email, password));
      if (response.status !== 200) throw Error('No se encontró el usuario');
      tigger();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error || '¡Algo salió mal! ',
      });
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) loginFunc(user.email, user.password);
    else setLoading(false);
  };

  const tigger = () => {
    props.setTrigger(false);
    dispatch(clearMessage());
    setUser({email: '', password: ''});
  };
  return props.trigger ? (
    <div className={styles.popUp}>
      <div className={styles.popUpInner}>
        <button className={styles.closeBtn} onClick={tigger}>
          X
        </button>
        <Form className="form-outline mb-4" onSubmit={handleLogin} ref={form}>
          <h2>Inicia sesión</h2>
          <div className={styles.formElement}>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              name="email"
              placeholder="Introduce tu email"
              value={user.email}
              onChange={(e) => onChangeUser(e, 'email')}
              validations={[required, validateEmail]}
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="password">Contraseña</label>
            <Input
              type="password"
              name="password"
              placeholder="Introduce tu contraseña"
              value={user.password}
              onChange={(e) => onChangeUser(e, 'password')}
              validations={[required, validatePassword]}
            />
          </div>

          <div className={styles.formElement}>
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && <span className="spinner-border spinner-border-sm"></span>}
              <span>Iniciar Sesión</span>
            </button>
          </div>
          <div className={styles.googleContainer}>
            <GoogleLogin
              onSuccess={(res) => {
                let userObject = jwt_decode(res.credential);
                loginFunc(userObject.email, userObject.aud.slice(0, 12));
              }}
            />
          </div>
          <CheckButton style={{display: 'none'}} ref={checkBtn} />

          <div className={styles.formElement}>
            <p>¿No tienes una cuenta?</p>

            <button
              onClick={(e) => {
                e.preventDefault();
                tigger();
                props.setTriggerSignUp(true);
              }}>
              ¡Registrate!
            </button>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    ''
  );
}

Login.propTypes = {
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
  setTriggerSignUp: PropTypes.func,
};
