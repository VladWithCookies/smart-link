import React, { useMemo } from 'react';
import { pipe, propOr } from 'ramda';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import Button from 'components/atoms/Button';
import { SERVICE_ICONS } from 'constants';
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
          className={styles.services__item}
        >
          <div className={styles.services__info}>
            <img
              src={SERVICE_ICONS[service.name]}
              height="30"
              width="30"
              alt=""
            />
            <p className={clsx(styles.services__name, 'ml-20')}>
              {service.name}
            </p>
          </div>
          <Button
            as="a"
            href={service.url}
            dataTestId={`link-${index}`}
          >
            Play
          </Button>
        </li>
      ), services)}
    </ul>
  );
}
