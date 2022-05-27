import React from 'react';
import { stringify } from 'qs';
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
  const { fields, append, remove } = useFieldArray({ name: 'service', control: methods.control });
  const navigate = useNavigate();
  const [{ name: SPOTIFY }] = STREAMING_SERVICE_OPTIONS;

  const handleSubmit = (values) => {
    navigate(`/?${stringify(values)}`);
  };

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit}
    >
      {fields.map((item, index) => (
        <Fieldset key={item.id}>
          <SelectField
            name={`service.${index}.name`}
            options={STREAMING_SERVICE_OPTIONS}
          />
          <InputField
            name={`service.${index}.url`}
            className={styles.input}
          />
          <Button
            kind="danger"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </Fieldset>
      ))}
      <div className={styles.actions}>
        <Button onClick={() => append({ name: SPOTIFY, url: '' })}>
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
