import styles from '../Login/PopUp.module.css';
import {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

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



const SignUp = (props )=> { 
    const form = useRef()
  const checkBtn = useRef()
  const [ name , setName ] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  const [ successful, setSuccessful  ] = useState(false)
  const dispatch = useDispatch()
  const  message = useSelector(state=> state.message)
  const [triggerPopUp, setTriggerPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  
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

  const handleRegister = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password))
        .then(() => {
          tigger();
          MySwal.fire({
            title: <strong>¡Registro exitoso!</strong>,
            html: <i>¡Ya puedes ingresar y encontrar lo buscabas!</i>,
            icon: 'success',
          });
        })
        .catch(() => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message || '¡Se ha presenta un error en tu registro intentalo nuevamente!',
          });
        });
    }
  };

  const tigger = () => {
    props.setTrigger(false);
    dispatch(clearMessage());
    setEmail('');
    setPassword('');
    setName('');
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
