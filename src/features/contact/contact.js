import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().required().email()
});

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    reset();
  };

  return (
    <section className="px-6 pt-28 w-screen grid justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 w-form">
        <label htmlFor="name">
          <p className="text-xl">Name</p>
          <input
            id="name"
            className="border-2 text-xl p-2 h-12 w-form"
            {...register('name')}
          />
          <p className="text-xl">{errors.firstName?.message}</p>
        </label>

        <label htmlFor="age">
          <p className="text-xl">Age</p>
          <input
            id="age"
            className="border-2 text-xl p-2 h-12 w-form"
            {...register('age')}
          />
          <p className="text-xl">{errors.age?.message}</p>
        </label>

        <label htmlFor="email">
          <p className="text-xl">E-mail</p>
          <input
            id="email"
            className="border-2 text-xl p-2 h-12 w-form"
            {...register('email')}
          />
          <p className="text-xl">{errors.email?.message}</p>
        </label>

        <input
          type="submit"
          className="h-12 text-xl justify-self-end w-44 cursor-pointer hover:bg-gray-300"
        />
        {success && (
          <div className="px-4 py-2 w-full text-2xl text-white bg-green-500">
            Your request has been sent.
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
