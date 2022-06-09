import React from 'react';
import 'openapi-explorer';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<openapi-explorer
  spec-url="http://localhost:3000/test.json"
  nav-bg-color="#732282"
  text-color="#555555"
  secondary-color="#f3e5f5" />);
