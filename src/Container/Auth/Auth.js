import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../Redux/action/AuthAction';

function Auth(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)

    let schemaobj, init;

    if (user === 'login') {
        schemaobj = {
            email: yup.string().email("Enter Your Email ID").required("Enter Valid Email ID!"),
            password: yup.string().required("Enter Your Password"),
        }
        init = {
            email: '',
            password: ''
        }
    }else if (user === 'Signup') {
        schemaobj = {
            name: yup.string().required("Enter Your Name"),
            email: yup.string().email("Enter Your Email ID").required("Enter Valid Email ID!"),
            password: yup.string().required("Enter Your Password"),
        }
        init = {
            name: '',
            email: '',
            password: ''        
        }
    }

    let schema = yup.object().shape(schemaobj);

    const insertData = (values) => {
        let LocalData = JSON.parse(localStorage.getItem('user'));
        console.log(values);

        if (LocalData === null) {
            localStorage.setItem("user" , JSON.stringify(values));
        } else {
            LocalData.push(values);
            localStorage.setItem("user" , JSON.stringify([LocalData]));
        }
    }

    const handleLogin = () => {
        localStorage.setItem('user' , '123')
    }

    const dispatch = useDispatch()
    const formikobj = useFormik({
        initialValues: init,
        validationSchema : schema,
        onSubmit: values => {
            if (user === 'login') {
                handleLogin()
            } else {
                insertData(values);
            }
            dispatch(signUpAction(values))
        },

        enableReinitialize : true,
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formikobj

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">

                    {
                        reset ?
                            <h2>Forgot Password</h2>
                            :
                            user === 'login' ?
                                <h2>Login</h2>
                                :           
                                <h2>Sign Up</h2>
                    }

                </div>

                <Formik values={formikobj}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            {
                                reset ?
                                    null
                                    :
                                    user === 'login' ?
                                        null
                                        :
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  onChange={handleChange} onBlur={handleBlur} />
                                            <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                                            <div className="validate" />
                                        </div>
                            }
                        </div>
                        <div className='row'>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} onBlur={handleBlur}/>
                                <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                                <div className="validate" />
                            </div>
                        </div>

                        <div>
                            {
                                reset ?
                                    null
                                    :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid password" onChange={handleChange} onBlur={handleBlur}/>
                                        <p className='text-danger'>{errors.password && touched.password ? errors.password : ''}</p>
                                        <div className="validate" />
                                    </div>
                            }

                        </div>

                        <div className='text-start'>
                            {
                                reset ?
                                    <>
                                        <p className='d-inline-block me-2 mt-3'>Already Have An Account ?</p>
                                        <button onClick={() => setReset(false)}>Login</button>
                                    </>
                                    :
                                    user === 'login' ?
                                        <>
                                            <p className='d-inline-block me-2 mt-3'>Create New Account</p>
                                            <a onClick={() => setUser('Signup')}>Sign Up</a>
                                            <a className='d-block' onClick={() => setReset(true)}>Forgot Password ?</a>
                                        </>
                                        :
                                        <>
                                            <p className='d-inline-block me-2 mt-3'>Already Have An Account ?</p>
                                            <a onClick={() => { setReset(true); setUser('login') }}>Login</a>
                                        </>

                            }
                        </div>


                        <div className="text-center">
                            {
                                reset ?
                                    <button type="submit">submit</button>
                                    :
                                    user === 'login' ?
                                        <button type="submit">Login</button>
                                        :
                                        <button type='submit'>Submit</button>
                            }
                        </div>
                    </Form>
                </Formik>

            </div>
        </section>

    );
}

export default Auth;