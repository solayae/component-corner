
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  
}
from 'mdb-react-ui-kit';
import { AiOutlineGooglePlus , AiFillFacebook} from "react-icons/ai";
import RegisterTwo from './register';

import styles from './PopUp.module.css';
import { useState, useRef,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { login, clearMessage} from "../../redux/actions";
import { isEmail } from 'validator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)




const required = (value) => {
    if (!value) {
      return (
        <div style={{color: 'red'}}>
          Este campo es obligatorio!
        </div>
      );
    }
  };
  const validatePassword = (value)=>{
    if (value.length < 8 || value.length > 40) {
      return (
        <div style={{color: 'red'}}>
          El password entre 8 y 40 characteres.
        </div>
      );
    }
  }

  const validateEmail = (value)=>{
    if(!isEmail(value)){
      return (
        <div style={{color: 'red'}}>
          Este email no es valido
      </div>
      )
    }
  }


  


function App(props) {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ successful, setSuccessful ] = useState(true);
  const { isLoggedIn } = useSelector(state => state.user);
  
  const message = useSelector(state=>state.message)
  const dispatch = useDispatch();

  const cleanFieldLogin = ()=>{
     handleJustifyClick('tab1')
     dispatch(clearMessage())
     
  }

  const cleanFieldRegister = ()=>{
    handleJustifyClick('tab2')
    dispatch(clearMessage())
 }

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
      
    //setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          
          setSuccessful(true)
          navigate("/user");
          window.location.reload();
          setLoading(false)
         
        })
        .catch(() => {
          setSuccessful(false)
           setLoading(false);
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
 
  setEmail('');
  setPassword('')

 }
 

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  return props.trigger ? (
    <div className={styles.popUp}>
    <div className={styles.popUpInner}>
      <button className={styles.closeBtn} onClick={tigger}>
        X
      </button>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

       <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
         <MDBTabsItem>
           <MDBTabsLink onClick={cleanFieldLogin} active={justifyActive === 'tab1'}>
             Inicio sesión
           </MDBTabsLink>
         </MDBTabsItem>
         <MDBTabsItem>
         <button className={styles.closeBtn} onClick={tigger}>
        X
      </button>
           <MDBTabsLink onClick={cleanFieldRegister} active={justifyActive === 'tab2'}>
             Registro
           </MDBTabsLink>
         </MDBTabsItem>
       </MDBTabs>

       <MDBTabsContent>

         <MDBTabsPane show={justifyActive === 'tab1'}>

           <div className="text-center mb-3">
             <p>O sigue con: </p>

             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <AiFillFacebook style={{fontSize: '3em'}}/>
               </MDBBtn>
               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <AiOutlineGooglePlus style={{fontSize: '3em'}}/>
               </MDBBtn>

               
             </div>

             <p className="text-center mt-3">or:</p>
           </div>
           { !successful &&  <div style={{color: 'red'}}>{message}</div> 
            
         }
           <Form onSubmit={handleLogin} ref={form}>
        
        <div className={styles.formElement}>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name='email'
            placeholder="Email"
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
            placeholder="Contraseña"
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
              <p>¿Olvidaste tú contraseña?</p>
            </Link>
          </div>
          
          
      </Form>
         </MDBTabsPane>

         <MDBTabsPane show={justifyActive === 'tab2'}>

           <div className="text-center mb-3">
             <p>O sigue con:</p>

             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
             <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <AiFillFacebook style={{fontSize: '3em'}}/>
               </MDBBtn>
               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <AiOutlineGooglePlus style={{fontSize: '3em'}}/>
               </MDBBtn>
             </div>

             <p className="text-center mt-3">or:</p>
           </div>

           <RegisterTwo cleanFieldLogin={cleanFieldLogin}/>
         </MDBTabsPane>

       </MDBTabsContent>

     </MDBContainer>
     </div>
    </div>
  ):('')


}

export default App;