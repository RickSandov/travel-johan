import { Link } from "react-router-dom"
import { useState } from "react"

export default function IconList({ data, headers, idPropName, deleteLink, editLink, filterProp, searchInputType, searchInputLabel, usersIcon }) {

    const [searchValue, setSearchValue] = useState('');
    const [displayData, setdisplayData] = useState(data);


    const handleChange = (e) => {
        e.preventDefault();

        let currentSearchValue = e.target.value;
        setSearchValue(currentSearchValue);

        // si el input está vacío, nos devuelve toda la data original
        if (!currentSearchValue.length) {
            setdisplayData(data);
            return;
        }

        // ** Checa bien cual es la propiedad que vas a filtar.
        // código para normalizar fecha EXACTA
        if (searchInputType === 'date') {
            const tempDate = currentSearchValue.split('-');
            currentSearchValue = `${tempDate[2]}/${tempDate[1]}/${tempDate[0]}`
        }

        const newData = data.filter(item => item[filterProp].toString().toLowerCase().includes(currentSearchValue));

        setdisplayData(newData);


    }

    return (
        <div className={`table`}>
            <div className="table__form">
                {/* <svg className="icon"><use href="./search.svg#search"></use></svg> */}
                <div className="table__form__input">
                    <label htmlFor="input">{searchInputLabel}</label>
                    <input id="input" type={searchInputType} value={searchValue} onInput={handleChange} />
                </div>
                {/* Por si quieres ageregar más de un input */}
                {/* <div className="table__form__input">
                    <label htmlFor="input">{searchInputLabel}</label>
                    <input id="input" type={searchInputType} value={searchValue} onChange={handleChange} />
                </div> */}
            </div>
            <div className={`table__header cols-${headers.length}`}>
                {
                    headers.map(header => (

                        <p>{header}</p>

                    ))
                }
            </div>
            <div className={`table__body`}>
                {
                    displayData.map(row => {

                        const info = []

                        for (const value in row) {
                            if (value !== idPropName) {
                                info.push(row[value])
                            }
                        }

                        return (
                            <div key={row[idPropName]} className={`table__body__item cols-${headers.length}`}>
                                {
                                    info.map((p, index) => (
                                        <p key={index} >{p}</p>
                                    ))
                                }
                                <div className="icons">
                                    <Link to={`${editLink}${row[idPropName]}`} >
                                        <svg className="edit"><use href="./edit.svg#edit" ></use></svg>
                                    </Link>
                                    <Link to={`${deleteLink}${row[idPropName]}`} >
                                        <svg className="trash"><use href={`./${usersIcon ? 'users' : 'trash'}.svg#${usersIcon ? 'users' : 'trash'}`} ></use></svg>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
