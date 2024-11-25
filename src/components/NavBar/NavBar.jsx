import React, { useState } from 'react';
import styles from './Navbar.module.css';
import data from '../../../public/navData.json';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Arrow icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleProfileDropdown = () => {
      setProfileOpen(!profileOpen);
    };
  
    return (
      <div>

        {/* Side Navigation */}
        <div className={`${styles.sidenav} ${isOpen ? styles.open : ''}`}>
          {/* Navbar Header */}
          <div className={styles.navbarHeader}>
            <div className={styles.logo_div}>
                <img src={data.logo} alt="Logo" className={styles.logo} />
                <h2>Trading</h2>
            </div>
            <button className={styles.toggleBtn} onClick={toggleNavbar}>
             {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </div>
  
          {/* Menu */}
          <div className={styles.menu}>
            <h3>menu</h3>
            <ul>
              {data.menu.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className={styles.menuItem}>
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Apps */}
          <div className={styles.apps}>
            <h3>apps</h3>
            <ul>
              {data.apps.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className={styles.appItem}>
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Account Info */}
          <div className={styles.accountInfo}>
            <label>Account:</label>
            <select className={styles.dropdown}>
              {data.profile.accountOptions.map((account) => (
                <option key={account}>{account}</option>
              ))}
            </select>
            <p>
              <strong>Status:</strong> <span className={styles.greenDot}></span>{' '}
              {data.profile.status}
            </p>
            <p>
              <strong>Program:</strong> {data.profile.program}
            </p>
          </div>
  
          {/* Profile */}
          <div className={styles.profile} onClick={toggleProfileDropdown}>
            <div className={styles.profileHeader}>
              <img src={data.profile.avatar} alt="Avatar" className={styles.profilePic} />
              <div className={styles.profileInfo}>
                <p className={styles.profileName}>{data.profile.name}</p>
                <p className={styles.profileEmail}>{data.profile.email}</p>
              </div>
              <FaChevronDown className={`${styles.arrow} ${profileOpen ? styles.rotate : ''}`} />
            </div>
            {profileOpen && (
              <div className={styles.profileDropdown}>
                <p>Account: {data.profile.accountOptions[0]}</p>
                <button className={styles.logoutBtn}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  

export default Navbar;
