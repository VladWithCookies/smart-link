import React from 'react';
import { FormProvider } from 'react-hook-form';

export default function Form({ onSubmit, methods, children }) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
