import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; <a href="https://www.listafirme.ro/rosoft-business-srl-35622162/">ROSOFT BUSINESS SRL</a> - RO35622162</li>
      </ul>
    </footer>
  );
}
