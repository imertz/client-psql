import React from "react";
import { Form, Text } from "react-form";
import "./UserForm.css";

const UserForm = props => {
  const validate = value => ({
    error:
      !value || !/Hello World/.test(value)
        ? "Input must contain 'Hello World'"
        : null,
    warning:
      !value || !/^Hello World$/.test(value)
        ? "Input should equal just 'Hello World'"
        : null,
    success:
      value && /Hello World/.test(value)
        ? "Thanks for entering 'Hello World'!"
        : null
  });

  let errorMessage = formApi => {
    if (formApi.errors) {
      return <h1>{formApi.errors.hello}</h1>;
    }
    if (formApi.warnings) {
      return <h1>{formApi.warnings.hello}</h1>;
    } else {
      return <h1>{formApi.values.hello}</h1>;
    }
  };

  return (
    <Form>
      {formApi => (
        <div className="login-page">
          <div className="form">
            <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
              <label htmlFor="hello">Hello World</label>
              <Text
                field="hello"
                id="hello"
                validate={validate}
                placeholder="username"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {errorMessage(formApi)}
            </form>
          </div>
        </div>
      )}
    </Form>
  );
};

export default UserForm;
