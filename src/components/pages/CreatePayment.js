import { useState } from "react";
import { useForm } from "../../hooks/useForm"
import ClientsList from "../ClientsList";

export default function CreatePayment() {

    const clients = [
        {
            _id: 1,
            name: 'Johan Israel',
            phoneNumber: '6181234567',
            address: 'Huizache 1'
        },
        {
            _id: 2,
            name: 'Rick Sánchez',
            phoneNumber: '6181234567',
            address: 'Huizache 1'
        },
        {
            _id: 3,
            name: 'Ángel Cruz',
            phoneNumber: '6181234567',
            address: 'Huizache 1'
        },
        {
            _id: 4,
            name: 'Eduardo Retana',
            phoneNumber: '6181234567',
            address: 'Huizache 1'
        }
    ]

    const [client, setClient] = useState({});

    const initialState = {
        desc: '',
        date: '',
        amount: ''
    }

    const [formValues, handleInputChange] = useForm(initialState);

    const { desc, date, amount } = formValues;

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Crear Gasto
                </h1>

                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Descripcion
                            </label>
                            <textarea name='desc'
                                value={desc}
                                onInput={handleInputChange}
                            ></textarea>
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Fecha
                            </label>
                            <input
                                name='date'
                                value={date}
                                onInput={handleInputChange}
                                type="date" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Monto
                            </label>
                            <input
                                name='amount'
                                value={amount}
                                onInput={handleInputChange}
                                type="number" />
                        </div>
                    </div>
                    <div className="col">
                        <ClientsList key={client._id} clients={clients} client={client} setClient={setClient} />
                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="btn">
                        Crear gasto
                    </button>
                </div>
            </div>

        </div>
    )
}
