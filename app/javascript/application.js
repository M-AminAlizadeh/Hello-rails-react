import React from 'react';
import ReactDom from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import App from './components/App';
import './index.css';

ReactDom.render(
  <RouterProvider router={App} />,
  document.getElementById('root'),
);
