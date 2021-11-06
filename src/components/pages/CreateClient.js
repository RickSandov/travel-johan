import { useForm } from "../../hooks/useForm"

export default function CreateClient() {

    const initialState = {
        name: '',
        lastName: '',
        address: '',
        birthDate: '',
        phoneNumber: ''
    }

    const [formValues, handleInputChange] = useForm(initialState);

    const { name, lastName, address, birthDate, phoneNumber } = formValues;

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Registro de cliente
                </h1>

                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Nombre
                            </label>
                            <input
                                name='name'
                                value={name}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Apellidos
                            </label>
                            <input
                                name='lastName'
                                value={lastName}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Dirección
                            </label>
                            <input
                                name='address'
                                value={address}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Fecha de nacimiento
                            </label>
                            <input
                                name='birthDate'
                                value={birthDate}
                                onInput={handleInputChange}
                                type="date" />
                        </div>
                        <div className="card__form__item">
                            <label htmlFor="name">
                                Número de teléfono
                            </label>
                            <input
                                name='phoneNumber'
                                value={phoneNumber}
                                onInput={handleInputChange}
                                type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <label><input type="checkbox" id="visa" value="visa" />
                            Pago de visa
                        </label>
                        <label><input type="checkbox" id="passport" value="passport" />
                            Copia de pasaporte
                        </label>
                        <label><input type="checkbox" id="visa-pic" value="visa-pic" />
                            Fotos para visa
                        </label>
                        <label><input type="checkbox" id="visa-right" value="visa-right" />
                            Derecho a visa
                        </label>
                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="btn">
                        Crear Cliente
                    </button>
                </div>
            </div>

        </div>
    )
}
