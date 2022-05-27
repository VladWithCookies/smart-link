import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SmartLink from 'features/SmartLink/pages/SmartLink';
import LinkCreator from 'features/SmartLink/pages/LinkCreator';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SmartLink />} />
        <Route path="create" element={<LinkCreator/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
