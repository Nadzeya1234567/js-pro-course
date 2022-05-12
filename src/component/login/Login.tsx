import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import useTime from "../hooks/useTime";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import { getEmailError, getPasswordError } from "../../helpers/validation";

const nameTranslate: FormValuesType = {
  en: "Name",
  ru: "Имя",
};

//fe19@front.end
//FE19-onl/Front End

const Login: React.FC = () => {
  const [values, _setValues] = useState<FormValuesType>({});
  const [validationsError, setValidationsError] = useState("");
  const { translate } = useTranslate();
  const { createTokens, setAuthError } = useActions();
  const loading = useSelector((state) => state.auth.loading);
  const serverError = useSelector((state) => state.auth.error);
  const error: string =
    validationsError ||
    (serverError ? "No active account found with the given credentials" : "");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const validationError =
      getEmailError(values.email) || getPasswordError(values.password);
    if (validationError) {
      setValidationsError(validationError);
    } else {
      createTokens(values);
    }
  };

  // const emailError = getEmailError(values.email);
  //if (emailError) {
  //   setValidationsError(emailError);
  //  return;
  // }

  const setValues = (
    callback: (prevValue: FormValuesType) => FormValuesType
  ) => {
    _setValues(callback);
    setValidationsError("");
    setAuthError(false);
  };

  return (
    <div className="center_content">
      <FormCard header="Login" loading={loading}>
        <FormTextField
          autofocus
          label="Email"
          type="email"
          name="email"
          values={values}
          setValues={setValues}
        />
        <FormTextField
          label="Password"
          type="password"
          name="password"
          values={values}
          setValues={setValues}
        />
        {error && <div className="form-error">{error}</div>}

        <Button onClick={handleSubmit}>{translate("login.submit")}</Button>
        {/* <button onClick={handleSubmit}>Submit</button > */}
      </FormCard>
    </div>
  );
};

export default Login;
