const Buscador = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" style={{fontSize:'0.8rem'}}  type="search" placeholder="Aquí su consulta" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

        </>
    );
}

export default Buscador;