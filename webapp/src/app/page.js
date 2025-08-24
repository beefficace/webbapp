import Layout from '@/components/Layout';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Dance with Chaos. Find Your Flow.</h1>
        <p className={styles.subtitle}>
          We don't solve problems. We guide you to navigate complexity with the grace of a dancer and the wisdom of a sage.
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <div className={styles.cta}>
          <h2>For Individuals</h2>
          <p>Unlock your personal operating system. Understand your sleep, nutrition, and stress to find your natural rhythm.</p>
          <Link href="/individuals" className={styles.ctaButton}>Explore Your Inner System</Link>
        </div>
        <div className={styles.cta}>
          <h2>For Businesses</h2>
          <p>Transform your organization into a living ecosystem. Foster fluidity, connection, and intelligent growth.</p>
          <Link href="/businesses" className={styles.ctaButton}>Cultivate Your Ecosystem</Link>
        </div>
      </div>
    </Layout>
  );
}
