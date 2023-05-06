import styles from './PopUp.module.css';
import { useState, useRef,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



import { isEmail } from 'validator'
import { register, clearMessage } from '../../redux/actions'

const required = (value) => {
  if (!value) {
    return (
        <div style={{color: 'red'}}>
        Este campo es obligatorio
      </div>
    );
  }
};
const validateEmail = (value)=>{
  if(!isEmail(value)){
    return (
        <div style={{color: 'red'}}>
        Este email no es valido
    </div>
    )
  }
}

const validateName = (value)=>{
  if(value.length < 3 || value.length > 12){
      return (
        <div style={{color: 'red'}}>
     El nombre debe ser entre 3 a 12 caracteres.
    </div>
      )
  }
}

const validatePassword = (value)=>{
  if (value.length < 8 || value.length > 40) {
    return (
        <div style={{color: 'red'}}>
        El password entre 8 y 40 characteres.
      </div>
    );
  }
}



const Register = ({cleanFieldLogin} )=> { 
  const form = useRef()
  const checkBtn = useRef()
  const [ name , setName ] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  const [ successful, setSuccessful  ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch()
  const  message = useSelector(state=> state.message)
  
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
    setSuccessful(false);
    
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password))
        .then(() => {
          
          
            MySwal.fire({
                title: <strong>¡Registro exitoso!</strong>,
                html: <i>¡Ya puedes ingresar y encontrar lo buscabas!</i>,
                icon: 'success'
              })
              
              cleanFieldLogin()
            setLoading(false)
             setSuccessful(true);
             
             
             
        })
        .catch(() => {
          setSuccessful(false);
          setLoading(false)
        })
        

    }

    
  };

  

   




 return  (
    
      <>
      
    
      { !successful &&  <div style={{color: 'red'}}>{message}</div> 
            
         }
      <Form onSubmit={handleRegister} ref={form}>
         <div className={styles.formElement}>
          <label htmlFor="name">Nombre</label>
          <Input
            type="text"
            name='name'
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


          
         
          <CheckButton style={{ display: "none" }} ref={checkBtn} />



      </Form>
      
   </>
        
    
  )
   
    
} 
export default Register
