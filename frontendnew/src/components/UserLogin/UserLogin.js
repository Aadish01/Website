import React, { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams} from 'react-router-dom'
import Input from '../Input/Input';
import { PHONE_NUMBER } from '../../constants/patterns';
import classes from './userlogin.module.css'
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
  
function UserLogin() {
    const { name , id} = useParams();
    const navigate = useNavigate();
    const params =new URL(document.location).searchParams;
    const returnUrl = params.get("returnUrl");
    const { register, handleSubmit, reset , formState: { errors} } = useForm();
    const { phone, otp, createOTP , checkUser , verifyOTP , logout } = useUser();

    const submit = async ({phone, otp}) => {
        otp ?
           await verifyOTP(phone,otp) : 
           await createOTP(phone) ;          
      };
      const loggout = async () => {
        reset();
        await logout();
      }
      useEffect(() => {
        checkUser();
        if(!phone) return ;
          returnUrl ? navigate(returnUrl) : navigate('/'+name+'/'+id+'/')
    },[phone]);

  return (
<div className={classes.container}>
      {phone ? (
        <div className={classes.details}>
          <button type="submit" onClick={loggout}>
            Logout
          </button>
        </div>
      ) : (
        <div className={classes.details}>
          <Title title={otp ? 'Verify OTP' : 'Login'} />
          <form onSubmit={handleSubmit(submit)} noValidate>
            {!otp && (
              <Input
                type="tel"
                label="Phone"
                {...register('phone', {
                  required: true,
                  pattern: PHONE_NUMBER,
                })}
                error={errors.phone}
              />
            )}

            {otp && (
              <Input
                type="otp"
                label="otp"
                {...register('otp', {
                  required: true,
                })}
                error={errors.otp}
              />
            )}

            <button type="submit">{otp ? 'Verify OTP' : 'Generate OTP'}</button>

            <div className={classes.register}>
              <Link to={'/' + name + '/' + id}>Go Back</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default UserLogin