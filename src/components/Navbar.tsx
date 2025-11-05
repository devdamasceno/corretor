import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/icons/logo-estatein.svg"
            alt="Estatein Logo"
            width={34}
            height={34}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>Estatein</span>
        </Link>
      </div>

      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>Quem Somos</Link>
        <Link href="/properties" className={styles.link}>Propriedades</Link>
        <Link href="/services" className={styles.link}>Serviços</Link>
      </nav>

      <div className={styles.actions}>
        <Link href="/contact" className={styles.contactBtn}>Contacte-nos</Link>
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </header>
  );
}
