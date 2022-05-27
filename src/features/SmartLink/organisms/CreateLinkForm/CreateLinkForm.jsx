import React from 'react';
import { pipe } from 'ramda';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';

import Form from 'components/atoms/Form';
import Button from 'components/atoms/Button';
import Fieldset from 'components/atoms/Fieldset';
import InputField from 'components/molecules/InputField';
import SelectField from 'components/molecules/SelectField';
import { STREAMING_SERVICE_OPTIONS } from 'constants';
import styles from './CreateLinkForm.module.scss';

export default function CreateLinkForm() {
  const methods = useForm();
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
            name={`services.${index}.url`}
            className={styles.form_input}
          />
          <Button
            kind="danger"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </Fieldset>
      ))}
      <div className={styles.form_actions}>
        <Button
          onClick={() => append({ name: SPOTIFY, url: '' })}
          disabled={fields.length >= STREAMING_SERVICE_OPTIONS.length}
        >
          Add Streaming Service
        </Button>
        <Button
          type="submit"
          kind="primary"
        >
          Create Smart Link
        </Button>
      </div>
    </Form>
  );
}
