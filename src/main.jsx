import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom"
import { UserProviderWrapper } from "./contents/user.context.jsx";
import { BlogProviderWrapper } from "./contents/blog.context.jsx";

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <BlogProviderWrapper>
    <UserProviderWrapper>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </UserProviderWrapper>
  </BlogProviderWrapper>
  //</StrictMode>,
)
