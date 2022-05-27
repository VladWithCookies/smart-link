import React, { useMemo } from 'react';
import { pipe, propOr } from 'ramda';
import { useParams } from 'react-router-dom';

import Button from 'components/atoms/Button';
import styles from './ServiceList.module.scss';

export default function ServiceList() {
  const { payload } = useParams();

  const services = useMemo(() => pipe(
    atob,
    JSON.parse,
    propOr([], 'services')
  )(payload), [payload]);

  return (
    <ul className={styles.services}>
      {services.map((service, index) => (
        <li
          key={index}
          className={styles.services_item}
        >
          <p>
            {service.name}
          </p>
          <Button
            as="a"
            href={service.url}
          >
            Play
          </Button>
        </li>
      ), services)}
    </ul>
  );
}
