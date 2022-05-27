import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SmartLink from 'features/SmartLink/pages/SmartLink';
import LinkCreator from 'features/SmartLink/pages/LinkCreator';
import './styles/helpers.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkCreator/>} />
        <Route path="/:payload" element={<SmartLink />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
