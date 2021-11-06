import { Link } from "react-router-dom"
import IconList from "../IconList"

export default function Passports() {

    const data = [
        {
            _id: 1,
            name: 'Johan Israel',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            expDate: '01/05/2025'
        },
        {
            _id: 2,
            name: 'Rick Sánchez',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            expDate: '01/05/2025'
        },
        {
            _id: 3,
            name: 'Ángel Cruz',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            expDate: '01/05/2025'
        },
        {
            _id: 4,
            name: 'Eduardo Retana',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            expDate: '01/05/2025'
        }
    ]

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Pasaportes Clientes
                </h1>

                <IconList
                    data={data}
                    headers={['Nombre', 'Número', 'Dirección', 'Fecha de expiración']}
                    deleteLink="./borrar/"
                    editLink="./editar/"
                    idPropName='_id'
                    filterProp="name"
                    searchInputType="text"
                    searchInputLabel="Filtrar por nombre"
                />

                <div className="buttons">
                    <Link
                        to='/viajes/crear-cliente'
                        // onClick={} --> aquí vas a poner tu función para cambiar el [data] que le mandas al IconList
                        className="btn">
                        Añadir clientes al viaje
                    </Link>
                </div>
            </div>


        </div>
    )
}
