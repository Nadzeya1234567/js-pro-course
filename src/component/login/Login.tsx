import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import useTime from "../hooks/useTime";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";

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
    <div className="center_content">
      <FormCard header="Login">
        <FormTextField
          autofocus={true}
          label={translate("login.name")} //lang === "en" ? "Name" : "Имя"
          name="name"
          values={values}
          setValues={setValues}
        />
        <FormTextField
          label={translate("login.email")}
          type="email"
          name="email"
          values={values}
          setValues={setValues}
        />
        <FormTextField
          label={translate("login.password")}
          type="password"
          name="password"
          values={values}
          setValues={setValues}
        />
        <FormTextField
          label={translate("login.confirmPassword")}
          type="password"
          name="confirmPassword"
          values={values}
          setValues={setValues}
        />
        <Button onClick={handleSubmit}>{translate("login.submit")}</Button>
        {/* <button onClick={handleSubmit}>Submit</button > */}
      </FormCard>
    </div>
  );
};

export default Login;
