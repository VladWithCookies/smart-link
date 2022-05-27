import React from 'react';
import { useFormContext } from 'react-hook-form';

import Select from 'components/atoms/Select';

export default function SelectField({ name, options }) {
  const { register } = useFormContext();

  return (
    <Select
      {...register(name)}
      options={options}
    />
  );
}
