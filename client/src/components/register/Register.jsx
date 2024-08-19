import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/use-auth";
import { useForm } from "../../hooks/use-form";
import { useState } from "react";

const initialValues = { email: "", password: "", "confirm-password": "" };

export default function Register() {
  const [error, setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const registerHadler = async (values) => {
    if (values.password !== values["confirm-password"]) {
      return setError("Uername or password incorrect!");
    }

    try {
      await register(values.email, values.password);

      navigate("/");
    } catch (err) {
      setError(err.message);
      // console.error(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHadler
  );

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={submitHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            placeholder="maria@email.com"
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            value={values.password}
            onChange={changeHandler}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={values["confirm-password"]}
            onChange={changeHandler}
          />
          {error && (
            <p style={{ color: "red" }}>
              <span>{error}</span>
            </p>
          )}

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
