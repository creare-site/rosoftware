import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
        Software company focused on <strong>Research & Automation</strong> - <a href="mailto:developer@rosoftware.ro">developer@rosoftware.ro</a>
        <br />
        Projects:{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://appseed.us">AppSeed.us</a>{' / '}
        <a target="_blank" rel="noopener noreferrer" href="https://websitemarket.ro">WebsiteMarket.ro</a>{' / '}  
        <a target="_blank" rel="noopener noreferrer" href="https://invat.eu">Invat.eu</a> 
      </p>
    </header>
  );
}
