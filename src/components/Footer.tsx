import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Estatein Logo"
              width={150}
              height={40}
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.desc}>
            Your trusted real estate partner. Buy, sell, or rent properties with
            confidence and ease.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.svg" alt="Facebook" width={22} height={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.svg" alt="Instagram" width={22} height={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.svg" alt="Twitter" width={22} height={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={22} height={22} />
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/agents">Agents</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>About Us</h4>
            <ul>
              <li><Link href="/about">Company</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>info@estatein.com</li>
              <li>+1 (800) 555-0199</li>
              <li>123 Palm Street, California, USA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Estatein. All rights reserved.</p>
      </div>
    </footer>
  );
}
