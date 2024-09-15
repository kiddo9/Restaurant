import { Field, ErrorMessage } from "formik"

function FormInput({ContainerStyle, InputStyle, ErrorStyle, FieldName, Type, Component, Title}) {
  return (
    <div className={ContainerStyle}>
        <label>{Title}</label>
      <Field type={Type} name={FieldName} className={InputStyle} />
      <ErrorMessage name={FieldName} component={Component} className={ErrorStyle} />
    </div>
  )
}

export default FormInput
