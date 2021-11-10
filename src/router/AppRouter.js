import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Clients from "../components/pages/Clients";
import CreateClient from "../components/pages/CreateClient";
import CreatePayment from "../components/pages/CreatePayment";
import CreateSpending from "../components/pages/CreateSpending";
import EditClient from "../components/pages/EditClient";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Passports from "../components/pages/Passports";
import Payments from "../components/pages/Payments";
import Trips from "../components/pages/Trips";
import TripsHistory from "../components/pages/TripsHistory";
import RecoverPwd from "../components/pages/RecoverPwd";
import SetPwd from "../components/pages/SetPwd";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Navbar />

                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/pagos" element={<Payments />} />
                    <Route exact path="/viajes" element={<Trips />} />
                    <Route exact path="/clientes/crear-cliente" element={<CreateClient />} />
                    <Route exact path="/clientes/editar/:id" element={<EditClient />} />
                    <Route exact path="/clientes" element={<Clients />} />
                    <Route exact path="/pasaportes" element={<Passports />} />
                    <Route exact path="/viajes/historial" element={<TripsHistory />} />
                    <Route exact path="/crear-gasto" element={<CreateSpending />} />
                    <Route exact path="/crear-pago" element={<CreatePayment />} />
                    <Route exact path="/recuperar" element={<RecoverPwd />} />
                    <Route exact path="/restablecer" element={<SetPwd />} />

                    <Navigate path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}