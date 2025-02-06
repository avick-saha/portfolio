import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/`} alt="" />
      </Link>
      <header>
        <h2>Avick Saha</h2>
        <p>
          <a href="mailto:avick.saha22@st.niituniversity.in">avick.saha22@st.niituniversity.in</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Avick, a 3rd year B.Tech Computer Science student at <a href="https://niituniversity.in/">NIIT University</a> with an excellent record, keen interest and practical exposure in the field of development, especially in Data Science and Artificial Intelligence.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Avick Saha.
      </p>
    </section>
  </section>
);

export default SideBar;
