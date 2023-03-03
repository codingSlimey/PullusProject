import React from 'react'
import Button from '../../../components/FARMER/button'
import orderSucess from '../../../images/orderSucess.svg'

const OrderSucessModal = (props) => {
    return (
        <div className='flex flex-col items-center gap-5' >
            <img src={orderSucess} alt="OrderSucess" />
            <h1 className='text-primary font-bold text-xl' >Order Sucessful </h1>
            <p className='text-primary text-center' >You have Sucessfully made an order </p>
            <Button 
            title='View Dashboard' 
            color={'fade'}
            action={props.action}
            />
            <Button
            title='View E-Reciept'
            color={'slate-900'}
            />
        </div>
    )
}
export default OrderSucessModal;