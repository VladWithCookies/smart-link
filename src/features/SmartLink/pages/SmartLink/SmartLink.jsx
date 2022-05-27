import React from 'react';

import ServiceList from 'features/SmartLink/organisms/ServiceList';
import MainLayout from 'components/templates/MainLayout';

export default function SmartLink() {
  return (
    <MainLayout>
      <ServiceList />
    </MainLayout>
  );
}
