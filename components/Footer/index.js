import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700'>
            <div className='container mx-auto p-4 text-center font-bold text-white'>
            Projeto desenvolvido por: João Paulo -  {''}
            <a className='hover:underline' href='https://linkedin.com/in/joaopaulorbz'>Linkedin</a> / {''}
            <a className='hover:underline' href='https://github.com/joaopaulorbz'>Github</a> 
            <div className='mt-2'>
            <img className='inline p-4' src='/logo_semana_fsm.png'/>
            <img className='inline p-4' src='/logo_devpleno.png' />
            </div>
            </div>
        </div>
    )
}
export default Footer 