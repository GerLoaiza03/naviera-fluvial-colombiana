import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Doughnut from '../../components/Doughnut/Doughnut.jsx';



const CrearUsuario = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVerticalUI/>

                    <div className="col-1"></div>
                        <div className="col-8">
                            <h3 className="fw-bold text-center pt-2 pb-3">Crear Usuario/ Modificar Usuarios</h3>
                            <h5 className="fw-bold text-start pt-2 pb-3">I. Ingrese Datos del Usuario </h5>
                        <form className="ms-5 me-5">
                            <div className="row dash-row">
                                <div className="col-xl-4">
                                    <div className="stats stats-primary-DB">
                                        <h3 className="stats-title"> Ordenes Generadas</h3>
                                        <div className="stats-content">
                                            <div className="stats-icon">
                                                <i className="far fa-copy"></i>
                                            </div>
                                            <div className="stats-data">
                                                <div className="stats-number">500</div>
                                                <div className="stats-change">
                                                    <span className="stats-percentage">200%</span>
                                                    <span className="stats-timeframe"> Desde el Último Mes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            

                            <div className="col-xl-4">
                                <div className="stats stats-danger-DB">
                                    <h3 className="stats-title"> Ordenes Finalizadas </h3>
                                    <div className="stats-content">
                                        <div className="stats-icon">
                                            <i className="far fa-images"></i>
                                        </div>
                                        <div className="stats-data">
                                            <div className="stats-number"></div>
                                            <div className="stats-change">
                                                <span className="stats-percentage"></span>
                                                <span className="stats-timeframe"> Desde el Último Mes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="stats stats-primary-DB">
                                    <h3 className="stats-title"> Usuarios Nuevos </h3>
                                    <div className="stats-content">
                                        <div className="stats-icon">
                                            <i className="far fa-edit"></i>
                                        </div>
                                        <div className="stats-data">
                                            <div className="stats-number"></div>
                                            <div className="stats-change">
                                                <span className="stats-percentage"></span>
                                                <span className="stats-timeframe"> Desde el Último Mes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="stats stats-success-DB ">
                                    <h3 className="stats-title">Puertos Habilitados</h3>
                                    <div className="stats-content">
                                        <div className="stats-icon">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="stats-data">
                                            <div className="stats-number"></div>
                                            <div className="stats-change">
                                                <span className="stats-percentage"></span>
                                                <span className="stats-timeframe"> Desde el Último Mes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
                        
                        <hr />

                        <div className="col-6 container" >
                        <h3 className="fw-bold text-center pt-2 pb-3">Ordenes Generadas</h3>
                        <Doughnut />
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default CrearUsuario;