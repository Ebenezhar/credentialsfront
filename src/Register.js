import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { config } from './conig'

function Register() {
  let navigate = useNavigate();
  const formik = useFormik(
    {
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      onSubmit: async (values) => {
        try {
          const register = await axios.post(`${config.api}/register`, values);
          alert(register.data.message);
        } catch (error) {
          console.log(error);
        }
      }
    }
  )
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'>
            <div className="form-group">
              <input
                type={"text"}
                className="form-control form-control-user mb-2"
                name={'username'}
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="form-group">
              <input
                type={"text"}
                className="form-control form-control-user mb-2"
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter Email Address..."
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type={"text"}
                className="form-control form-control-user"
                name={'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <button
              to="/Login"
              type={"submit"}
              className="btn btn-primary btn-user btn-block m-2"
            >
              Register
            </button>
          </div>
          <Link to='/'>
            Already have account
          </Link>

        </div>
      </form>

    </div>

  )
}

export default Register