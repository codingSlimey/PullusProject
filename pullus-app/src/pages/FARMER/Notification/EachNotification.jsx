import React from 'react'

export default function EachNotification() {
  return (
		<div   className='my-5 overflow-y-scroll py-10 hide-scrollbars    mx-3 md:mx-auto rounded-xl md:w-10/12 lg:w-1/2 h-screen  bg-white' >
            <div className='flex items-start mx-auto justify-center w-80  flex-col  text-primary gap-5'>
                <h1 className='font-bold flex gap-5'>Order : <span className=' font-normal'>#1453 </span> </h1>
                <h1 className='font-bold flex gap-5'>payment : <span className=' font-normal'>Vai wallet </span> </h1>
                <h1 className='font-bold flex gap-5'>Date : <span className=' font-normal'>23.08.2022 </span> </h1>
                <h1 className='font-bold flex gap-5'>Time : <span className=' font-normal'>5:10pm </span> </h1>
                <button className='w-80 bg-slate-100  py-3 px-5 font-semibold border border-l-0 border-b-0 border-r-0 border-t-slate-400'>Billing</button>
                {[...Array(2)].map((_, i) =>{
                    return(
                        <div className='flex items-start gap-5 flex-col '>
                <button className='w-80 bg-slate-100  py-3 px-5 font-semibold border border-l-0 border-b-0 border-r-0 border-t-slate-400'>Shipping</button>

                <h1 className='font-bold flex gap-5'>Name : <span className=' font-normal'>Sandra Obike </span> </h1>
                <h1 className='font-bold flex gap-5'>Company : <span className=' font-normal'>Sandra okibe farms ltd </span> </h1>
                <h1 className='font-bold flex gap-5'>Address : <span className=' font-normal'>NO. 7 Ojo street </span> </h1>
                <h1 className='font-bold flex gap-5'>LGA : <span className=' font-normal'>Apapa </span> </h1>
                <h1 className='font-bold flex gap-5'>State : <span className=' font-normal'>Lagos </span> </h1>
                <h1 className='font-bold flex gap-5'>Country : <span className=' font-normal'>Nigeria </span> </h1>
                <h1 className='font-bold flex gap-5'>Email : <span className=' font-normal'>sandraobike@domain.com </span> </h1>
                <h1 className='font-bold flex gap-5'>Phone Number : <span className=' font-normal'>+234 803-1111-111 </span> </h1>


                        
                        </div>
                    )
                } )}
                </div>
    </div>
  )
}
