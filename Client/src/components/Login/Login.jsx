import styles from './PopUp.module.css';
import { useState, useRef,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { login, clearMessage } from "../../redux/actions";
import { isEmail } from 'validator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import GoogleButton from 'react-google-button'





const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Este campo es obligatorio!
        </div>
      );
    }
  };
  const validatePassword = (value)=>{
    if (value.length < 8 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          El password entre 8 y 40 characteres.
        </div>
      );
    }
  }

  const validateEmail = (value)=>{
    if(!isEmail(value)){
      return (
        <div className="alert alert-danger" role="alert">
          Este email no es valido
      </div>
      )
    }
  }



export default function Login(props){
  
  
 
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.user);
  const { message } = useSelector(state => state);

  const dispatch = useDispatch();

  
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          navigate("/user");
         
        })
        .catch(() => {
          setLoading(false);
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Por favor verifica tú usuario y contraseña!' + message 
            
          })
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }




 const tigger =()=>{
  props.setTrigger(false)
  dispatch(clearMessage())
  setEmail('');
  setPassword('')

 }
  return props.trigger ? (
    <div className={styles.popUp}>
    <div className={styles.popUpInner}>
      <button className={styles.closeBtn} onClick={tigger}>
        X
      </button>
      <Form onSubmit={handleLogin} ref={form}>
        <h2>Inicia sesión</h2>
        <div className={styles.formElement}>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name='email'
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
            name='password'
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={onChangePassword}
            validations={[required, validatePassword]}
          />
        
        </div>
      


        <div className={styles.formElement}>
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Iniciar Sesión</span>
            </button>
          </div>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />

        <div className={styles.formElement}>
            
            <p>¿No tienes una cuenta?</p>
            <Link to={'#'}>
             <button>¡Resgistrate!</button>
            </Link>
            <Link to={'#'}>
              <p>¿Olvidaste tú contraseña?</p>
            </Link>
          </div>
          
          <div className={styles.formElement}>
            
          <GoogleButton  label='Inicia sesión con Google'/>
          </div>
      </Form>
      
         
    </div>
  </div>

    
  ):('')
  
}


Login.propTypes = {
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
};

