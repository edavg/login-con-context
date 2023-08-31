import "./App.css";
import { useContext, useState } from "react";
import { validateEmail } from "./utils";
import { themeContext } from "./Contexto"
import { BsSunFill, BsMoon } from "react-icons/bs"


const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">La contraseña debe tener al menos 8 caracteres</p>
  );
};

const App = () => {
  const { theme, toggle} = useContext(themeContext)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return(firstName &&
    validateEmail(email) &&
    password.value.length >= 8 &&
    role !== "role")
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta creada!");
    clearForm();
  };

  return (

    <div className={theme === "light" ? "App light-content" : "App dark-content"}>
      <form onSubmit={handleSubmit}>
        <fieldset className={theme === "light" ? "field-light" : "dark-field"}>
          <h2>Crea tu cuenta</h2>
          <div className="Field">
            <label>
              Nombre <sup>*</sup>
            </label>
            <input
              className={theme === "light" ? "input" : "dark-input"}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="Nombre" />
          </div>
          <div className="Field">
            <label>Apellido</label>
            <input
              className={theme === "light" ? "input" : "dark-input"}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
                placeholder = "Apellido" />
          </div>
          <div className="Field">
            <label>
              Correo electrónico <sup>*</sup>
            </label>
            <input
              className={theme === "light" ? "input" : "dark-input"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Correo electrónico" />
          </div>
          <div className="Field">
            <label>
              Contraseña <sup>*</sup>
            </label>
            <input
              className={theme === "light" ? "input" : "dark-input"}
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Contraseña"
            />
            {password.isTouched && password.value.length < 8  && password.value.length > 1 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select 
            className={theme === "light" ? "select" : "select-dark"}
            value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Rol</option>
              <option value="individual">Personal</option>
              <option value="business">Empresa</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Crear Cuenta
          </button>
        </fieldset>
      </form>
      <button className={theme === "light" ? "light-switch" : "dark-switch"} onClick={toggle}>{theme === 'light' ? <BsSunFill/> : <BsMoon/>}</button>
    </div>

  )
}

export default App;
