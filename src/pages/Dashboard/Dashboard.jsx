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
                            <div class="row dash-row">
                                <div class="col-xl-4">
                                    <div class="stats stats-primary-DB">
                                        <h3 class="stats-title"> Ordenes Generadas</h3>
                                        <div class="stats-content">
                                            <div class="stats-icon">
                                                <i class="far fa-copy"></i>
                                            </div>
                                            <div class="stats-data">
                                                <div class="stats-number">500</div>
                                                <div class="stats-change">
                                                    <span class="stats-percentage">200%</span>
                                                    <span class="stats-timeframe"> Desde el Último Mes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            

                            <div class="col-xl-4">
                                <div class="stats stats-danger-DB">
                                    <h3 class="stats-title"> Ordenes Finalizadas </h3>
                                    <div class="stats-content">
                                        <div class="stats-icon">
                                            <i class="far fa-images"></i>
                                        </div>
                                        <div class="stats-data">
                                            <div class="stats-number"></div>
                                            <div class="stats-change">
                                                <span class="stats-percentage"></span>
                                                <span class="stats-timeframe"> Desde el Último Mes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-4">
                                <div class="stats stats-primary-DB">
                                    <h3 class="stats-title"> Usuarios Nuevos </h3>
                                    <div class="stats-content">
                                        <div class="stats-icon">
                                            <i class="far fa-edit"></i>
                                        </div>
                                        <div class="stats-data">
                                            <div class="stats-number"></div>
                                            <div class="stats-change">
                                                <span class="stats-percentage"></span>
                                                <span class="stats-timeframe"> Desde el Último Mes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-4">
                                <div class="stats stats-success-DB ">
                                    <h3 class="stats-title">Puertos Habilitados</h3>
                                    <div class="stats-content">
                                        <div class="stats-icon">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div class="stats-data">
                                            <div class="stats-number"></div>
                                            <div class="stats-change">
                                                <span class="stats-percentage"></span>
                                                <span class="stats-timeframe"> Desde el Último Mes</span>
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