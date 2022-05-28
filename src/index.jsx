import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import SmartLink from 'features/SmartLink/pages/SmartLink';
import LinkCreator from 'features/SmartLink/pages/LinkCreator';
import './styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LinkCreator/>} />
        <Route path="/:payload" element={<SmartLink />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
