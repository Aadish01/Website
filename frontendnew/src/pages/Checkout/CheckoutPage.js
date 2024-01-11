import React, { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/OrderService';
import Footer from '../Footer/Footer';

function CheckoutPage() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const { order , setOrder} = useState({...cart});

    const submit = async data  => {
        await createOrder({...order, name: data.name})
        navigate('/payments');
    }

  return (
    <div>CheckoutPage
      <Footer />
    </div>
  )
}

export default CheckoutPage