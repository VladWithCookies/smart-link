import React from 'react';
import { path, split } from 'ramda';
import { useFormContext } from 'react-hook-form';

import Input from 'components/atoms/Input';
import ValidationError from 'components/atoms/ValidationError';
import styles from './InputField.module.scss';

export default function InputField({ id, name, kind, dataTestId, ...props }) {
  const { register, formState: { errors } } = useFormContext();
  const error = path(split('.', name), errors);

  return (
    <div
      className={styles.field}
      data-testid={dataTestId}
    >
      <Input
        id={id}
        kind={error ? 'error' : kind}
        {...props}
        {...register(name)}
      />
      {error && (
        <ValidationError ariaDescribedBy={id}>
          {error.message}
        </ValidationError>
      )}
    </div>
  );
}
