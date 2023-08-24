import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Avick Saha</h2>
        <p><a href="mailto:avicksaha2@gmail.com">avicksaha2.@gmailcom</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Avick. Currently, pursuing B.Tech CSE in <a href="https://niituniversity.in/">NIIT University</a> Also,
        I am the co-founder and CTO of <a href="https://pantapulao.com">PantaPulao</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Avick Saha</p>
    </section>
  </section>
);

export default SideBar;
