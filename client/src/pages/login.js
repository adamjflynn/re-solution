import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
	const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error }] = useMutation(LOGIN_USER);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

        try {
            const { data } = await login({
              variables: { ...formState },
            });
      
            Auth.login(data.login.token);
          } catch (e) {
            console.error(e);
          }
      
		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-md-6">
				<div className="card">
					<h4 className="card-header">Login</h4>
					<div className="card-body">
						<form onSubmit={handleFormSubmit}>
							<input
								className="form-input"
								placeholder="Your email"
								name="email"
								type="email"
								id="email"
								value={formState.email}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="******"
								name="password"
								type="password"
								id="password"
								value={formState.password}
								onChange={handleChange}
							/>
							<button className="btn d-block w-100" type="submit">
								Submit
							</button>
						</form>
                        {error && <div> Login Failed </div>}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;


// import React, { useState } from 'react';

// import { Form, Button, Alert } from 'react-bootstrap';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';


// const LoginForm = () => {
// 	const [userFormData, setUserFormData] = useState({ email: '', password: '' });
// 	const [validated] = useState(false);
// 	const [showAlert, setShowAlert] = useState(false);
  
// 	const [loginUser, {Error} ] = useMutation(LOGIN_USER);
  
// 	const handleInputChange = (event) => {
// 	  const { name, value } = event.target;
// 	  setUserFormData({ ...userFormData, [name]: value });
// 	};
  
// 	const handleFormSubmit = async (event) => {
// 	  event.preventDefault();
  
// 	  const form = event.currentTarget;
// 	  if (form.checkValidity() === false) {
// 		event.preventDefault();
// 		event.stopPropagation();
// 	  }
  
// 	  try {
// 		const response = await loginUser(userFormData);
  
// 		if (!response.ok) {
// 		  throw new Error('something went wrong!');
// 		}
  
// 		const { token, user } = await response.json();
// 		console.log(user);
// 		Auth.login(token);
// 	  } catch (err) {
// 		console.error(err);
// 		setShowAlert(true);
// 	  }
  
// 	  setUserFormData({
// 		username: '',
// 		email: '',
// 		password: '',
// 	  });
// 	};
  
// 	return (
// 	  <>
// 		<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
// 		  <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
// 			Invalid login!
// 		  </Alert>
// 		  <Form.Group>
// 			<Form.Label htmlFor='email'>Email</Form.Label>
// 			<Form.Control
// 			  type='text'
// 			  placeholder='Your email'
// 			  name='email'
// 			  onChange={handleInputChange}
// 			  value={userFormData.email}
// 			  required
// 			/>
// 			<Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
// 		  </Form.Group>
  
// 		  <Form.Group>
// 			<Form.Label htmlFor='password'>Password</Form.Label>
// 			<Form.Control
// 			  type='password'
// 			  placeholder='Your password'
// 			  name='password'
// 			  onChange={handleInputChange}
// 			  value={userFormData.password}
// 			  required
// 			/>
// 			<Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
// 		  </Form.Group>
// 		  <Button
// 			disabled={!(userFormData.email && userFormData.password)}
// 			type='submit'
// 			variant='success'>
// 			Submit
// 		  </Button>
// 		</Form>
// 	  </>
// 	);
//   };
  
//   export default LoginForm;