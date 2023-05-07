import styles from '../Login/PopUp.module.css';
import {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import jwt_decode from 'jwt-decode';
import {GoogleLogin} from '@react-oauth/google';

import {isEmail} from 'validator';
import {register, clearMessage} from '../../redux/actions';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es obligatorio
      </div>
    );
  }
};
const validateEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Este email no es valido
      </div>
    );
  }
};

const validateName = (value) => {
  if (value.length < 3 || value.length > 12) {
    return (
      <div className="alert alert-danger" role="alert">
        El nombre debe ser entre 3 a 12 caracteres.
      </div>
    );
  }
};

const validatePassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        El password entre 8 y 40 characteres.
      </div>
    );
  }
};

const SignUp = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const registerUser = async (name, email, password) => {
    const response = await dispatch(register(name, email, password));
    if (response.status === 200) {
      MySwal.fire({
        title: <strong>¡Registro exitoso!</strong>,
        html: <i>¡Ya puedes ingresar y encontrar lo buscabas!</i>,
        icon: 'success',
      });
      props.setTrigger(false);
      return;
    }
    if (response.status === 400) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: response.data.message || '¡Se ha presenta un error en tu registro intentalo nuevamente!',
      });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      registerUser(name, email, password);
    }
  };

  const tigger = () => {
    props.setTrigger(false);
    dispatch(clearMessage());
    setEmail('');
    setPassword('');
    setName('');
  };
  const registerFromGoogle = async (res) => {
    let userObject = jwt_decode(res.credential);
    registerUser(userObject.given_name, userObject.email, userObject.aud.slice(0, 12));
  };

  return props.trigger ? (
    <div className={styles.popUp}>
      <div className={styles.popUpInner}>
        <button className={styles.closeBtn} onClick={tigger}>
          X
        </button>
        <Form onSubmit={handleRegister} ref={form}>
          <h2>Registrate</h2>
          <div className={styles.formElement}>
            <label htmlFor="name">Nombre</label>
            <Input
              type="text"
              name="name"
              placeholder="Introduce tu nombre"
              value={name}
              onChange={onChangeName}
              validations={[required, validateName]}
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              name="email"
              placeholder="Introduce tu email"
              value={email}
              onChange={onChangeEmail}
              validations={[required, validateEmail]}
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="password">Contraseña</label>
            <Input
              type="password"
              name="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={onChangePassword}
              validations={[required, validatePassword]}
            />
          </div>

          <div className={styles.formElement}>
            <button className="btn btn-primary btn-block" disabled={false}>
              <span>Aceptar</span>
            </button>
          </div>
          <div className={styles.googleContainer}>
            <GoogleLogin onSuccess={(response) => registerFromGoogle(response)} />
          </div>
          <div className={styles.formElement}>
            <p>¿Ya cuentas con una cuenta?</p>
            <Link to={'#'}>
              <button>¡Inicia sesion!</button>
            </Link>
            <Link to={'#'}>
              <p>¿Olvidaste tú contraseña?</p>
            </Link>
          </div>

          <CheckButton style={{display: 'none'}} ref={checkBtn} />
        </Form>
      </div>
    </div>
  ) : (
    ''
  );
};
export default SignUp;

SignUp.propTypes = {
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
};
