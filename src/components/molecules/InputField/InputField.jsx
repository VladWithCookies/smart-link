import React from 'react';
import { useFormContext } from 'react-hook-form';

import Input from 'components/atoms/Input';

export default function InputField({ name, ...props }) {
  const { register } = useFormContext();

  return (
    <Input
      {...props}
      {...register(name)}
    />
  );
}
