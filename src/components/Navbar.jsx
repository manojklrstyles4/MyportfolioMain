import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // New function to handle link clicks
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <nav style={navbarStyles.navbar}>
      <div style={navbarStyles.mainContainer}>
        <div style={navbarStyles.leftSection}>
          <button style={navbarStyles.menuButton} onClick={toggleSidebar}>
            ☰
          </button>
          <div style={navbarStyles.brand}>LOGO</div>
        </div>

        <div style={navbarStyles.rightSection}>
          <div style={navbarStyles.navLinksContainer}>
            <Link to="/" style={navbarStyles.navLink}>Home</Link>
            <Link to="/about" style={navbarStyles.navLink}>About</Link>
            <Link to="/contact" style={navbarStyles.navLink}>Contact</Link>
          </div>
        </div>
      </div>

      <div
        ref={sidebarRef}
        style={{
          ...navbarStyles.sidebarContainer,
          ...(sidebarOpen ? navbarStyles.sidebarContainerOpen : {}),
        }}
      >
        <h3 style={navbarStyles.sidebarHeading}>Menu</h3>
        <ul style={navbarStyles.sidebarList}>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/" style={navbarStyles.sidebarLink} onClick={handleLinkClick}>Home</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/about" style={navbarStyles.sidebarLink} onClick={handleLinkClick}>About</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/skills" style={navbarStyles.sidebarLink} onClick={handleLinkClick}>Skills</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/projects" style={navbarStyles.sidebarLink} onClick={handleLinkClick}>Projects</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/contact" style={navbarStyles.sidebarLink} onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navbarStyles = {
    navbar: {
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      },
      mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 5%',
        borderBottom: '1px solid #e0e0e0',
        flexWrap: 'wrap',
      },
      leftSection: {
        display: 'flex',
        alignItems: 'center',
      },
      rightSection: {
        display: 'flex',
        alignItems: 'center',
      },
      brand: {
        fontWeight: '700',
        fontSize: '20px',
        color: '#0056D2',
        textDecoration: 'none',
        marginLeft: '15px',
        marginRight:'15px',
      },
      navLinksContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      navLink: {
        textDecoration: 'none',
        color: '#333',
        margin: '0 10px',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'color 0.3s',
      },
      menuButton: {
        backgroundColor: '#0056D2',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        fontSize: '14px',
        cursor: 'pointer',
        borderRadius: '5px',
      },
      sidebarContainer: {
        display: 'none',
        backgroundColor: '#ffffff',
        padding: '20px',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100vh',
        width: '250px',
        zIndex: '100',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        transform: 'translateX(-100%)',
      },
      sidebarContainerOpen: {
        display: 'block',
        transform: 'translateX(0)',
      },
      sidebarHeading: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '2px',
      },
      sidebarList: {
        listStyleType: 'none',
        paddingLeft: '0',
      },
      sidebarItem: {
        padding: '10px 0',
        fontSize: '18px',
        fontWeight: '500',
        color: '#555',
        borderBottom: '1px solid #e0e0e0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
      sidebarLink: {
        textDecoration: 'none',
        color: '#555',
      },
      '@media (max-width: 768px)': {
        mainContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        leftSection: {
          order: 1,
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '15px',
        },
        rightSection: {
          order: 2,
          width: '100%',
        },
        navLinksContainer: {
          display: 'none',
        },
        brand: {
          fontSize: '18px',
        },
      },
    };
    

export default Navbar;