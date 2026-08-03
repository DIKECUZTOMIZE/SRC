import React from "react";
import { FormProvider } from "react-hook-form";

const Form = React.memo(
  ({
    methods,
    onSubmit,
    children,
    className = "",
    autoComplete = "off",
    noValidate = true,
    id,
  }) => {
    if (!methods) {
      throw new Error("Form requires react-hook-form methods.");
    }

    return (
      <FormProvider {...methods}>
        <form
          id={id}
          noValidate={noValidate}
          autoComplete={autoComplete}
          onSubmit={methods.handleSubmit(onSubmit)}
          className={`w-full ${className}`}
        >
          {children}
        </form>
      </FormProvider>
    );
  },
);

Form.displayName = "Form";

export default Form;
