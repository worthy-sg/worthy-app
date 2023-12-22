// NavBar.js
import React from "react";
import Image from 'next/image';
import data from '@json/links.json';
import styles from '@css/NavBar.module.css';

const links = data.links;

const NavBar = () => (
  <div className={`fixed-bottom ${styles.adminNavigation}`}>
    <ul className={`adminNavOptions ${styles.navbarUl}`}>
      {links.map((link) => (
        <li key={link.href} className={`${styles.iconAbove} ${styles.navbarLi}`}>
            <a className={`${styles.navbarA}`} href={link.href}>
            <Image className={styles.icon} src={link.icon} width={24} height={24} alt={link.label} />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
