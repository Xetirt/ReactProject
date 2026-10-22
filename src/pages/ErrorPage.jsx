import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <section id="error-page">
        <h1>ERROR</h1>
        <h2>No puedes entrar ahí</h2>
        <Link to="/">Ir a Home</Link>
    </section>
    
  )
}

export default ErrorPage