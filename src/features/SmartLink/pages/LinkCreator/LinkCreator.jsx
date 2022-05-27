import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import CreateLinkForm from 'features/SmartLink/organisms/CreateLinkForm';

export default function LinkCreator() {
  return (
    <MainLayout>
      <CreateLinkForm />
    </MainLayout>
  );
}
