import React, { useState } from "react";
// import styles from './styles.module.css'
import Input from "../FARMER/Input";
import Button from "../FARMER/button";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const navigate = useNavigate()

   const handleChange = (event) => {
	setNewPassword(event.target.value)
   }

  function handleSubmit(event) {
    event.preventDefault();

    if (newPassword === confirmation && newPassword.length > 5 && newPassword !== '' && confirmation !== '') {
		navigate('/farmer/production-plan')

    }
	else {
		alert('Passwords do not match')
	}
  }

  return (
    <div>
      <form className="px-10 py-5 flex flex-col "  onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="**********"
          label="Create Your new Password"
          onChange={handleChange}
          value={newPassword}
        />
        <Input
          type="password"
          placeholder="**********"
          label="Confirm Your new Password"
          name="confirmPassword"
          onChange={(event) => {
            setConfirmation(event.target.value);
          }}
        />
		<div className="flex mx-auto justify-center">
        <Button title="Continue" color={`fade`}  />
		</div>
      </form>
    </div>
  );
}

{
  /* <input
						type={'password'}
						placeholder={'New Password'}
						name={'password'}
						onChange={handleChange}
						value={newPassword.password}
					/>
					<input
						type={'password'}
						placeholder={'Confirm Password'}
						className={styles.confirm}
						name={'confirmPassword'}
						onChange={(event) => {
							setConfirmation((prev) => {
								const { name, value } = event.target
								return { ...prev, [name]: value }
							})
						}}
					/> */
}
