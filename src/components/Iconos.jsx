import { TfiGoogle, TfiGithub, TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Iconos = ()=>{
    return(
        <div className="formulario__iconos">
            <Link className="formulario__icono">
                <TfiGoogle/>
            </Link>
            <Link className="formulario__icono">
                <TfiGithub/>
            </Link>
            <Link className="formulario__icono">
                <TfiFacebook/>
            </Link>
            <Link className="formulario__icono">
                <TfiTwitterAlt/>
            </Link>
        </div>
    );
};