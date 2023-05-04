// import styles from './SignInPage.module.css';
// import PopUp from '../../components/PopUp/PopUp';
// import axios from 'axios';

// export default function SignInPage() {
//   const form = useRef()
//   const checkBtn = useRef()
//   const [ name , setName ] = useState('')
//   const [ email, setEmail] = useState('')
//   const [ password, setPassword ] = useState('')
//   const [ successful, setSuccessful  ] = useState(false)
//   const dispatch = useDispatch()
//   const  message = useSelector(state=> state.message)
//   const [triggerPopUp, setTriggerPopUp] = useState(false);
//   const [message, setMessage] = useState('');

//   const validate = (value) => {
//     const regex = /[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]/;
//     const errors = {};
//     if (!value.userEmail || !regex.test(value.userEmail)) errors.userEmail = 'Debe introducir un email válido.';
//     if (value.userPassword.length < 8 || value.userPassword > 16)
//       errors.userPassword = 'Debe introducir una contraseña de entre 8 y 12 caracteres.';
//     if (!value.userSecondPassword) errors.userSecondPassword = 'Debe introducir una contraseña';
//     if (value.userSecondPassword !== value.userPassword) errors.userSecondPassword = 'Las contraseñas no coinciden.';
//     return errors;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     setSuccessful(false);
//     form.current.validateAll();
//     if (checkBtn.current.context._errors.length === 0) {
//       dispatch(register(name, email, password))
//         .then(() => {
//           setSuccessful(true);
//         })
//         .catch(() => {
//           setSuccessful(false);
//         });
//     }
//     setErrorList({});
//     try {
//       const response = await axios.post('http://localhost:3001/users/', {
//         name: email,
//         email,
//         password,
//         direction: 'unknown',
//       });
//       const messageResponse = response.data.message;
//       console.log(messageResponse);
//       setMessage(messageResponse);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return (
//     <div className={styles.register}>
//       <PopUp trigger={triggerPopUp} setTrigger={setTriggerPopUp} />
//       <div className={styles.registerInner}>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <h2>Regístrate</h2>
//           <div className={styles.formElement}>
//             <div className={styles.box}>
//               <label htmlFor="email">Introduce tu email:</label>
//               <input
//                 type="text"
//                 name='name'
//                 value={name}
//                 placeholder="Name"
//                 onChange={onChangeName}
//                 validations={[required, validateName]}/>
//           </div>  
//         </div>
//         <div className={styles.formElement}>
//           <div className={styles.box}>
//           <label htmlFor="email">Introduce un correo:</label>
//               <Input
//                 type="text"
//                 name='email'
//                 value={email}
//                 placeholder="Email"
//                 onChange={onChangeEmail}
//                 validations={[required, validateEmail]}/>
//           </div>
//         </div>
//         <div className={styles.formElement}>
//           <div className={styles.box}>
//           <label htmlFor="password">Introduce una contraseña:</label>
//               <Input
//                 type="password"
//                 name='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {errorList.userPassword && <p>{errorList.userPassword}</p>}
//             </div>
//           </div>
//           <div className={styles.formElement}>
//             <label htmlFor="password">Vuelve a introducir tu contraseña:</label>
//             <div className={styles.box}>
//               <input
//                 type="password"
//                 id="secondPassword"
//                 placeholder="Contraseña"
//                 value={secondPassword}
//                 onChange={(e) => setSecondPassword(e.target.value)}
//               />
//               {errorList.userSecondPassword && <p>{errorList.userSecondPassword}</p>}
//             </div>
//           </div>
//           {message && <h4>{message}</h4>}
//           <div className={styles.formElement}>
//             <button>Registrarse</button>
//             <p>¿Ya tienes una cuenta?</p>
//             <button
//               onClick={() => {
//                 setTriggerPopUp(true);
//               }}>
//               Inicia Sesión
//             </button>
//           </div>
//         </div>
//       <div className="form-group">
//           <button className="btn btn-primary btn-block">Aceptar</button>
//       </div>
//       </div>
//       )}

      

//       {message.length && 
//       (  
//             <div className="form-group">
//               <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
//                  {message}
                
//               </div>
//             </div>
//           )}
//           <CheckButton style={{ display: "none" }} ref={checkBtn} />

//     </Form>
//     </div>
//   </div>
// )




// }









