// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // 이 줄 추가
import ModoMartLanding from './landing-page';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <ModoMartLanding />
    </React.StrictMode>
);