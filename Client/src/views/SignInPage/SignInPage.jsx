import styles from './SignInPage.module.css';
import Topbar from '../../components/Topbar/Topbar';
import PopUp from '../../components/PopUp/PopUp';
import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import { register } from '../../redux/actions'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es obligatorio
      </div>
    );
  }
};
const validateEmail = (value)=>{
  if(!isEmail(value)){
    return (
      <div className="alert alert-danger" role="alert">
        Este email no es valido
    </div>
    )
  }
}

const validateName = (value)=>{
  if(value.length < 3 || value.length > 12){
      return (
        <div className="alert alert-danger" role="alert">
     El nombre debe ser entre 3 a 12 caracteres.
    </div>
      )
  }
}

const validatePassword = (value)=>{
  if (value.length < 8 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        El password entre 8 y 40 characteres.
      </div>
    );
  }
}



export default function SignInPage() {
  const form = useRef()
  const checkBtn = useRef()
  const [ name , setName ] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  const [ successful, setSuccessful  ] = useState(false)
  const dispatch = useDispatch()
  const  message = useSelector(state=> state.message)
  const [triggerPopUp, setTriggerPopUp] = useState(false);
  
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
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };


return(
  <div className={styles.register}>
    <PopUp trigger={triggerPopUp} setTrigger={setTriggerPopUp} />
    <Topbar />
    <div className={styles.registerInner}>
    <Form onSubmit={handleRegister} ref={form}> 
   
    {!successful && (
      <div>
      <h2>Regístrate</h2>
        <div className={styles.formElement}>
          <div className={styles.box}>
              <label htmlFor="name">Introduce nombre de usuraio</label>
              <Input
                type="text"
                name='name'
                value={name}
                placeholder="Name"
                onChange={onChangeName}
                validations={[required, validateName]}/>
          </div>  
        </div>
        <div className={styles.formElement}>
          <div className={styles.box}>
          <label htmlFor="email">Introduce un correo:</label>
              <Input
                type="text"
                name='email'
                value={email}
                placeholder="Email"
                onChange={onChangeEmail}
                validations={[required, validateEmail]}/>
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.box}>
          <label htmlFor="password">Introduce una contraseña:</label>
              <Input
                type="password"
                name='password'
                value={password}
                placeholder="Password"
                onChange={onChangePassword}
                validations={[required, validatePassword]}/>
          </div>
        </div>
      <div className="form-group">
          <button className="btn btn-primary btn-block">Aceptar</button>
      </div>
      </div>
      )}

      

      {message.length && 
      (  
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                 {message}
                
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />

    </Form>
    </div>
  </div>
)




}









