import ImagenCliente from "../../components/Imagen/ImgenCliente";
import clientes from "../../img/nuestros-clientes.png"

const Clientes = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 ">
                        <p className="parrafoclientes" >Nuestros</p>
                        <p className="parrafoclientes1 ">Clientes</p>

                    </div>
                    <ImagenCliente />

                </div>
                <div className="row">
                    <h1 className="text-center pt-2">Es son los más destacados...</h1>
                    <img src={clientes} alt="" className="" />
                </div>


            </div>


        </>

    );
}

export default Clientes;