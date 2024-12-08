import { ErrorMessage, Field } from "formik";

function FormFile({
  ContainerStyle,
  InputStyle,
  ErrorStyle,
  FieldName,
  Component,
  Title,
  InputRef,
  Change,
}) {
  return (
    <div className={ContainerStyle}>
      <label>{Title}</label>
      {/* Use a regular input element for file handling */}
      <Field name={FieldName}>
        {({ form }) => (
          <input
            type="file"
            className={InputStyle}
            onChange={(e) => {
              form.setFieldValue(FieldName, e.currentTarget.files[0]); // Update Formik's state
              if (Change) Change(e); // Call custom change handler if provided
            }}
            ref={InputRef}
          />
        )}
      </Field>
      <ErrorMessage name={FieldName} component={Component} className={ErrorStyle} />
    </div>
  );
}

export default FormFile;
