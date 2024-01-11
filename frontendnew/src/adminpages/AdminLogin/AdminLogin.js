import React, { useEffect, useReducer} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAdmin } from '../../hooks/useAdmin';
import classes from  './adminlogin.module.css'
import Input from '../../components/Input/Input';
import { EMAIL } from '../../constants/patterns';
import { getRestaurantById } from '../../services/RestaurantService';
import NotFound from '../../mainpages/NotFoundPage/NotFound';
import Header from '../../components/Header/Header';


const initialState = {
  Restaurant: []
};

const reducer = (state, action) => {
  switch (action.type) {
      case 'RESTAURANT_LOADED':
        return {...state, Restaurant: action.payload};
      default:
        return state;
    }
}

export default function LoginPage() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { Restaurant } = state;
  const {name , id} = useParams();

  useEffect(() => {
    try{
        getRestaurantById( id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
    }
    catch(err){
        console.log("BAD URL")
    }
  },[id]);

  const {
    handleSubmit,
    register,
    formState: { errors }} = useForm();

  const { user, login , checkAdmin } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
      checkAdmin();
      if(!user) return; 
        navigate(`/a/${name}/${id}/Admin/Home`)
  },[user]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };


  return (
    Restaurant ?
    <div className={classes.container}>
      <Header restaurant={Restaurant} />
        <div className={classes.content}>
          <div className={classes.boxy}> 
          <div className={classes.title}>Admin Login</div>
          <form onSubmit={handleSubmit(submit)} noValidate>
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

            <button type='submit' className={classes.button}>Login</button>

          </form>
          </div>
        </div>
    </div>
    : <NotFound message="BAD URL" />
  );
}
