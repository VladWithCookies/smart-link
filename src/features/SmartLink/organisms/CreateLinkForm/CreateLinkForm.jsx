import React from 'react';
import { pipe } from 'ramda';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray } from 'react-hook-form';

import Form from 'components/atoms/Form';
import Button from 'components/atoms/Button';
import Fieldset from 'components/atoms/Fieldset';
import InputField from 'components/molecules/InputField';
import SelectField from 'components/molecules/SelectField';
import { STREAMING_SERVICE_OPTIONS } from 'constants';
import validationSchema from './validationSchema';
import styles from './CreateLinkForm.module.scss';

export default function CreateLinkForm() {
  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const { fields, append, remove } = useFieldArray({ name: 'services', control: methods.control });
  const navigate = useNavigate();

  const [{ name: SPOTIFY }] = STREAMING_SERVICE_OPTIONS;
  const handleSubmit = pipe(JSON.stringify, btoa, navigate);

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {fields.map((item, index) => (
        <Fieldset key={item.id}>
          <SelectField
            name={`services.${index}.name`}
            options={STREAMING_SERVICE_OPTIONS}
          />
          <InputField
            id={`services-${index}-url`}
            name={`services.${index}.url`}
            className={styles.form__input}
            dataTestId={`url-field-${index}`}
          />
          <Button
            kind="danger"
            onClick={() => remove(index)}
            dataTestId={`remove-streaming-${index}`}
          >
            Remove
          </Button>
        </Fieldset>
      ))}
      <div className={styles.form__actions}>
        <Button
          onClick={() => append({ name: SPOTIFY, url: '' })}
          disabled={fields.length >= STREAMING_SERVICE_OPTIONS.length}
          dataTestId="add-streaming"
        >
          Add Streaming
        </Button>
        <Button
          type="submit"
          kind="primary"
          disabled={!fields.length}
          dataTestId="create-link"
        >
          Create Link
        </Button>
      </div>
    </Form>
  );
}
