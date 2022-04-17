import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import useTime from "../hooks/useTime";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import TextField from "../ui/textField/TextField";

const nameTranslate: FormValuesType = {
  en: "Name",
  ru: "Имя",
};

const Login: React.FC = () => {
  const [values, setValues] = useState<FormValuesType>({});

  const { translate } = useTranslate();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <FormCard header="Login">
      <TextField
        autofocus={true}
        label={translate("login.name")} //lang === "en" ? "Name" : "Имя"
        name="name"
        values={values}
        setValues={setValues}
      />
      <TextField
        label={translate("login.email")}
        type="email"
        name="email"
        values={values}
        setValues={setValues}
      />
      <TextField
        label={translate("login.password")}
        type="password"
        name="password"
        values={values}
        setValues={setValues}
      />
      <TextField
        label={translate("login.confirmPassword")}
        type="password"
        name="confirmPassword"
        values={values}
        setValues={setValues}
      />
      <Button onClick={handleSubmit}>{translate("login.submit")}</Button>
      {/* <button onClick={handleSubmit}>Submit</button > */}
    </FormCard>
  );
};

export default Login;
