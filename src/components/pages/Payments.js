import { useState } from "react"
import IconList from "../IconList"

export default function Payments({ data = [
    {
        type: 'pago',
        desc: 'pago de pasaporte',
        amount: 999,
        date: '03/06/2021',
        _id: 1
    },
    {
        type: 'gasto',
        desc: 'renta',
        amount: 999,
        date: '03/06/2021',
        _id: 2
    },
    {
        type: 'pago',
        desc: 'pago de pasaporte',
        amount: 520,
        date: '10/11/2021',
        _id: 3
    },
    {
        type: 'gasto',
        desc: 'sueldo',
        amount: 999,
        date: '03/06/2021',
        _id: 4
    }
] }) {

    const [total, setTotal] = useState(0);
    const [currentView, setCurrentView] = useState('');
    const [dispData, setDispData] = useState(data);

    const handleChangeData = view => {
        setCurrentView(view);

        let tempTotal = 0;

        const tempData = data.filter(({ type, amount }) => {
            if (type === view) {
                tempTotal += amount
            }
            return type === view;
        });

        setDispData(tempData);
        setTotal(tempTotal);
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Pagos y Gastos
                </h1>

                <IconList
                    data={dispData}
                    headers={['Tipo de recibo', 'Descripción', 'Monto', 'Fecha de creación']}
                    deleteLink="./borrar/"
                    editLink="./editar/"
                    idPropName='_id'
                    filterProp="date"
                    searchInputType="date"
                    searchInputLabel="Fecha exacta"
                    key={currentView}
                />

                {
                    currentView && (
                        <div className="total">
                            <span className="text">
                                Total: <strong>${total.toLocaleString()}</strong>
                            </span>
                        </div>
                    )
                }

                <div className="buttons">
                    <button
                        onClick={e => handleChangeData('pago')}
                        className="btn">
                        Ver pagos
                    </button>

                    <button
                        onClick={e => handleChangeData('gasto')}
                        className="btn">
                        Ver gastos
                    </button>
                </div>

            </div>


        </div>
    )
}
