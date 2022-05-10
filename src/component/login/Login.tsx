import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import useTime from "../hooks/useTime";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";

const nameTranslate: FormValuesType = {
  en: "Name",
  ru: "Имя",
};

//fe19@front.end
//FE19-onl/Front End

const Login: React.FC = () => {
  const [values, setValues] = useState<FormValuesType>({});
  const { translate } = useTranslate();
  const { createTokens } = useActions();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createTokens(values);
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
        {error && (
          <div className="form-error">
            No active account found with the given credentials
          </div>
        )}

        <Button onClick={handleSubmit}>{translate("login.submit")}</Button>
        {/* <button onClick={handleSubmit}>Submit</button > */}
      </FormCard>
    </div>
  );
};

export default Login;
