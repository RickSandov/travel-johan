import React from 'react'
import {
    Link
} from "react-router-dom";
import { useState } from 'react';

export default function Navbar() {

    const [active, setActive] = useState(false);

    return (
        <>
            <div
                onClick={e => setActive(!active)}
                className={`phoneNav ${active && 'active'}`}>
                <svg><use href="./plane.svg#plane"></use></svg>
            </div>
            <nav className={`navbar ${active && 'active'}`}>
                <Link to="/" className="navbar__logo">
                    <img src="./logo.png" alt="logo" />
                </Link>
                <div className="navbar__user">
                    <svg><use href="./user.svg#user"></use></svg>
                    <p className="name">
                        Johan Gonzalez
                    </p>
                </div>
                <div className="navbar__group-links">
                    <div className="group">
                        <div className="link">
                            <Link className="main-link" to="/viajes">Viajes</Link>
                            <Link to="/">Crear Viaje</Link>
                            <Link to="/viajes/historial">Historial de viajes</Link>

                        </div>
                        <div className="link">
                            <Link className="main-link" to="/pasaportes">Pasaportes</Link>
                            <Link to="/clientes/crear-cliente">Crear cliente</Link>
                            <Link to="/clientes">Ver clientes</Link>

                        </div>
                        <div className="link">
                            <Link className="main-link" to='/pagos'>Pagos</Link>
                            <Link to="/crear-pago">Crear pago</Link>
                            <Link to="/crear-gasto">Crear gasto</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar__logout">
                    <p>Cerrar sesión</p>
                </div>
            </nav>
        </>
    )
}
