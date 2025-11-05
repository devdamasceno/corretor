import styles from "@/styles/HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Discover Your Dream Property with Estatein</h1>
        <p>
          Your journey to finding the perfect property begins here. Explore our listings
          to find the home that matches your dreams.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.learnBtn}>Learn More</Link>
          <Link href="/properties" className={styles.browseBtn}>Browse Properties</Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.statsItem}><h3>200+</h3><p>Happy Customers</p></div>
          <div className={styles.statsItem}><h3>10k+</h3><p>Properties For Clients</p></div>
          <div className={styles.statsItem}><h3>16+</h3><p>Years of Experience</p></div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/icons/hero-building.png"
          alt="Modern Building"
          width={500}
          height={600}
          className={styles.image}
        />
      </div>
    </section>
  );
}
