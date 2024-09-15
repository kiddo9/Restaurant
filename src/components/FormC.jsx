import {Formik, Form} from 'formik'


function FormC({children, DefualtValue, FormSchema, Submission, Style}) {
  return (
    <div className={Style}>
      <Formik initialValues={DefualtValue} validationSchema={FormSchema} onSubmit={Submission}>
        <Form>
            {children}
        </Form>
      </Formik>
    </div>
  )
}

export default FormC
