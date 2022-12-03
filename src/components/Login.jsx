import style from '../styles/Login.module.css';
import { app } from '../firebaseConfig';
import { Campo } from './Campo';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Iconos } from './Iconos';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
export const Login = ({ titulo })=>{
    const [ email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();
    const handleChange = (e)=>{
        if(e.target.id==='email'){
            setEmail(e.target.value);
        }
        else if(e.target.id==='password'){
            setPassword(e.target.value);
        }
    };
    const handleLogin = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            setError('');
            Swal.fire({
                title:'Inicio de sesión',
                icon:'success',
                text:'En un momento será redireccionado a otro sitio.',
                confirmButtonText:'Cerrar',
                confirmButtonColor:'rgb(40, 136, 245)'
            })
        })
        .catch((error)=>{
            const email = 'auth/invalid-email';
            const pass = 'auth/wrong-password';
            Swal.fire({
                title:'Inicio de sesión',
                icon:'error',
                text:'Error al ingresar sus credenciales, verifica tus datos.' 
            });
            console.log(error.code);
            if(error.code===email){
                setError('email');
            }else if(error.code===pass){
                setError('password');
            }
        });
    };
    return(
        <div className={ style.formulario }>
            <div className={ style.formulario__top }>
                <h3 className={ style.formulario__title }>{ titulo }</h3>
            </div>
            <Iconos/>
            <div className={ style.formulario__bottom }>
                <div className={ style.formulario__campos }>
                    { /* Email*/ }
                    <Campo error={error} funcion={handleChange} tipo={"email"} id={"email"} nombre={"Correo electrónico"} />
                    { /* Password */}
                    <Campo error={error}  funcion={handleChange} tipo={"password"} id={"password"} nombre={"Contraseña de usuario"} />
                </div>
                <div className={ style.formulario__campos_end }>
                    <a className={style.formulario__link} href="#">¿Tienes problemas al ingresar tu correo electrónico?</a>
                    <Link className={style.formulario__link} to={'/account'}>Crea una cuenta aquí</Link>
                    <button className={style.formulario__btn} onClick={handleLogin} type="button" id="sign-in">Login</button>
                </div>
            </div>
        </div>
    );
};