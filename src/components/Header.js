import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
      Open-Source starter coded in React, Gatsby on top of Html5 Up Eventually design.
      <br />
      <a href="https://github.com/app-generator/gatsby-html5up-eventually">Get Sources</a>
      </p>
    </header>
  );
}
