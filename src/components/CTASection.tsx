import styles from "@/styles/CTASection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2>Start Your Real Estate Journey Today</h2>
          <p>
            Your dream property awaits. Whether buying, selling, or investing, Estatein
            guides you every step of the way. Let’s turn your real estate goals into
            reality.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>

        <div className={styles.imageBlock}>
          <Image
            src="/images/cta-building.jpg"
            alt="Modern Building"
            width={520}
            height={380}
            className={styles.image}
          />
          <div className={styles.glow}></div>
        </div>
      </div>
    </section>
  );
}
