import { useForm } from "react-hook-form";
import { getRestaurantById, updateRestaurant } from "../../services/RestaurantService";
import React, { useEffect, useReducer } from 'react'
import Input from "../../components/Input/Input";
import { useParams } from "react-router-dom";
import classes from './updaterestaurant.module.css'

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

function UpdateRestaurant() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { Restaurant } = state;
  const { id} = useParams();

  useEffect(() => {
    try{
        getRestaurantById( id ).then(Restaurant => dispatch({type:'RESTAURANT_LOADED', payload: Restaurant}));
    }
    catch(err){
        console.log("BAD URL")
    }
  },[id]);


  const submit = async ({ address , description ,contact ,openingTime , closingTime , instaLink , fbLink , addressLink }) => {

    const data = {address , description ,contact ,openingTime , closingTime , instaLink , fbLink , addressLink} ;
    if(window.confirm('Are you Sure? '))
     await updateRestaurant(id,data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },} = useForm();

  return (
      <div className={classes.details}>
        <form onSubmit={handleSubmit(submit)} noValidate >
          <Input
            defaultValue={Restaurant.address}
            type="address"
            label="Address"
            {...register('address', {
              required: true,
            })}
            error={errors.address}
          />
          <Input
            defaultValue={Restaurant.description}
            type="description"
            label="Description"
            {...register('description', {
              required: true,
            })}
            error={errors.description}
          />
          <Input
            defaultValue={Restaurant.contact}
            type="contact"
            label="Contact"
            {...register('contact', {
              required: true,
            })}
            error={errors.contact}
          />

          <Input
            defaultValue={Restaurant.openingTime}
            type="openingTime"
            label="Opening Time"
            {...register('openingTime', {
              required: true,
            })}
            error={errors.openingTime}
          />
          <Input
            defaultValue={Restaurant.closingTime}
            type="closingTime"
            label="Closing Time"
            {...register('closingTime', {
              required: true,
            })}
            error={errors.closingTime}
          />

          <Input
            defaultValue={Restaurant.instaLink}
            type="instaLink"
            label="Instagram Link"
            {...register('instaLink', {
              required: true,
            })}
            error={errors.openingTime}
          />
          <Input
            defaultValue={Restaurant.fbLink}
            type="fbLink"
            label="FacebookLink"
            {...register('fbLink', {
              required: true,
            })}
            error={errors.fbLink}
          />
          <Input
          defaultValue={Restaurant.addressLink}
            type="addressLink"
            label="Address Link Google Maps"
            {...register('addressLink', {
              required: true,
            })}
            error={errors.addressLink}
          />
          <button className={classes.button} type='submit'>Update Restaurant</button>
        </form>
      </div>
  )
}

export default UpdateRestaurant;