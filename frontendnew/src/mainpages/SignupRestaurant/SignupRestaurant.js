import { useForm } from "react-hook-form";
import { useAdmin } from "../../hooks/useAdmin";
import classes from './signuprestaurant.module.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { EMAIL } from "../../constants/patterns";
import Input from "../../components/Input/Input";
import Navbar from "../Navbar/Navbar";

function SignupRestaurant() {
  const { user , signup } = useAdmin();
  const [ nxt , setnxt ] = useState(false);

  useEffect(() => {
    if (!user) return;
    navigate('/'+user.restaurantName+'/'+user.restaurantId);
  }, [user]);
  
  const submit = async ({ email, password , restaurantName ,address , description ,contact ,openingTime , closingTime , instaLink , fbLink , addressLink }) => {
    await signup(email, password, restaurantName ,address , description ,contact ,openingTime , closingTime , instaLink , fbLink , addressLink);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },} = useForm();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Navbar />
      </div>
      <div className={classes.content}>
      <div className={classes.details}>
        <div className={classes.title}>Register Your Restaurant</div>
        <div className={classes.subtitle}>Note: Use this only if you are Restaurant owner</div>

        <form onSubmit={handleSubmit(submit)} noValidate >
          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: true,
              pattern: EMAIL,
            })}
            error={errors.email}
          />

          <Input
            type="password"
            label="Password"
            {...register('password', {
              required: true,
            })}
            error={errors.password}
          />

          <Input
            type="resturantName"
            label="RestaurantName"
            {...register('restaurantName', {
              required: true,
            })}
            error={errors.text}
          />
          {
            !nxt ? (
              <>
                <button className={classes.button} onClick={() => setnxt(true)} >Next</button>
              </>
            ) : (
              <>
                         <Input
            type="address"
            label="Address"
            {...register('address', {
              required: true,
            })}
            error={errors.address}
          />

          <Input
            type="description"
            label="Description"
            {...register('description', {
              required: true,
            })}
            error={errors.description}
          />
                      <Input
            type="contact"
            label="Contact"
            {...register('contact', {
              required: true,
            })}
            error={errors.contact}
          />

          <Input
            type="openingTime"
            label="Opening Time"
            {...register('openingTime', {
              required: true,
            })}
            error={errors.openingTime}
          />
                                <Input
            type="closingTime"
            label="Closing Time"
            {...register('closingTime', {
              required: true,
            })}
            error={errors.closingTime}
          />

          <Input
            type="instaLink"
            label="Instagram Link"
            {...register('instaLink', {
              required: true,
            })}
            error={errors.openingTime}
          />
          <Input
            type="fbLink"
            label="FacebookLink"
            {...register('fbLink', {
              required: true,
            })}
            error={errors.fbLink}
          />
                    <Input
            type="addressLink"
            label="Address Link Google Maps"
            {...register('addressLink', {
              required: true,
            })}
            error={errors.addressLink}
          />
                <button className={classes.button} type='submit'>Register Your Restaurant</button>
              </>
            )
          }

        </form>
      </div>
      </div>
    </div>
  )
}

export default SignupRestaurant;