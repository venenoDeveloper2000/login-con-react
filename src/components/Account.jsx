import style from '../styles/Login.module.css';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Campo } from './Campo';
import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export const Account = ({ titulo })=>{
    const [ email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const auth = getAuth();
    const handleChange = (e)=>{
        if(e.target.id==='email'){
            setEmail(e.target.value);
        }
        else if(e.target.id==='password'){
            setPassword(e.target.value);
        }
    };
    const handleCreate = ()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            console.log(response.user);
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    return(
        <div className={ style.formulario }>
            <div className={ style.formulario__top }>
                <h3 className={ style.formulario__title } >{ titulo }</h3>
            </div>
            <div className={ style.formulario__bottom }>
                <div className={ style.formulario__campos }>
                    { /* Email*/ }
                    <Campo funcion={handleChange} tipo={"email"} id={"email"} nombre={"Correo electrónico"} />
                    { /* Password */}
                    <Campo funcion={handleChange} tipo={"password"} id={"password"} nombre={"Contraseña de usuario"} />
                </div>
                <div className={ style.formulario__campos_end }>
                    <button className={style.formulario__btn} onClick={ handleCreate } type="button" id="sign-in">Create</button>
                </div>
            </div>
        </div>
    );
};