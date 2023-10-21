"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from 'reactfire';
import { createUserWithEmailAndPassword } from "firebase/auth";
const FireLogin = () =>{
    const { register, formState: { errors }, handleSubmit} = useForm();
    const auth = useAuth();
    const createUser = async (email, password) =>{
        const reponse = await createUserWithEmailAndPassword(auth,"admin1@upb.com", "esteEselPassword");
        debugger;
    }
    const onSubmit = (data) =>{
        const user ={
            user:data.email,
            password:data.password
        }
        createUser(data.email, data.password);
    }
    
    return (
        <div className='flex w-full h-screen bg-[#F2F2F2] justify-center align-middle items-center'>
            <div className='flex flex-col bg-[#EAEAEA] border-2 border-black py-6 px-6'>
                <form className='flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <label className=" text-xl text-black mb-5 font-medium">Email</label>
                        <input
                            type="text"
                            className=" text-base border-2 border-black w-72 h-9 invalid:border-red-800 px-4 py-3 text-black"
                            placeholder="ejemplo123@upb.com"
                            {...register('email', {
                                required: true
                            })}
                        />
                        {errors.email?.type === 'required' && <h1 className=" text-base text-red-700">*Debe llenar este campo</h1>}
                    </div>
                    <div className='flex flex-col'>
                        <label className=" text-xl text-black mb-5 font-medium">Password</label>
                        <input
                            type="text"
                            className=" text-base border-2 border-black w-72 h-9 invalid:border-red-800 px-4 py-3 text-black"
                            placeholder="*******"
                            {...register('password', {
                                required: true
                            })}
                        />
                        {errors.password?.type === 'required' && <h1 className=" text-base text-red-700">*Debe llenar este campo</h1>}
                    </div>
                    <button className=' flex text-xl font-medium w-76 h-9 bg-[#929292] px-5 py-6 text-black justify-center items-center align-middle' type="submit">Continuar</button>

                </form>
                
            </div>
        </div>
    );
}

export default FireLogin;