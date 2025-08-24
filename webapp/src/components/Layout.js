import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          {/* Navigation will go here */}
          Be Efficace
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Be Efficace. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
