

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src="./logo.png" alt="" className="logo" />
                </div>
                <form className="login-card__form">
                    <div className="inputs">
                        <input placeHolder="Nombre de usuario" type="text" />
                        <input placeHolder="Contraseña" type="password" name="pwd" id="pwd" />
                    </div>
                    <button className="btn">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    )
}
