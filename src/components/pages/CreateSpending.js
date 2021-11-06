import { useForm } from "../../hooks/useForm"

export default function CreateSpending() {

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
                                type="text" />
                        </div>
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
