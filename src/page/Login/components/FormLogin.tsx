import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';


const initialValues = { user: '', password: '' }

const FormLogin = () => {

  const history = useHistory()

  const Signupschema = Yup.object().shape({
    user: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Signupschema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
            history.push('/home')
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '10px'
          }}>
            <TextField
              name='user'
              onChange={handleChange}
              value={values.user}
              onBlur={handleBlur}
              id="outlined-required"
              label="Usuario"
              variant="outlined"
            />
            <span style={{ color: 'red' }}>
              {errors.user && touched.user && errors.user}
            </span>

            <TextField
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id="outlined-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <span style={{ color: 'red' }}>
              {errors.password && touched.password && errors.password}
            </span>

            <Button variant="contained" type="submit">Iniciar sesión</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
