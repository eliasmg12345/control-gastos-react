import { useState } from "react";
import Mensaje from "./Mensaje";



const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje('no es valido');
            
            return
        } 
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario'
                onSubmit={handlePresupuesto}
                action="">
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>

                    <input type="text"
                        className='nuevo-presupuesto'
                        placeholder='añade tu presupuesto'
                        value={presupuesto}
                        onChange={e => { setPresupuesto(Number(e.target.value)) }}
                    />
                </div>
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto