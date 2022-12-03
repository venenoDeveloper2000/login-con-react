import style from '../styles/Campo.module.css';
export const Campo = ({ tipo, id, nombre, funcion, error })=>{
  //console.log(style);
  console.log(error==='formulario__error')
  return (
    <div className={style.formulario__datos}>
      <label style={(tipo===error)?({color:'#B92736',textDecoration:'underline'}):({})} htmlFor={ id }>{ nombre }</label>
      <input style={(tipo===error)?({border:'2px solid #B92736'}):({})} onChange={ funcion } type={ tipo } id={ id } />
    </div>
  );
};