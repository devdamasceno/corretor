import styles from "@/styles/FeaturesGrid.module.css";
import Image from "next/image";

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      icon: "/icons/home.svg",
      title: "Find Your Dream Home",
      text: "Explore listings to find properties that perfectly match your vision and lifestyle.",
    },
    {
      id: 2,
      icon: "/icons/unlock.svg",
      title: "Unlock Property Value",
      text: "Discover your property’s market worth and make confident real estate decisions.",
    },
    {
      id: 3,
      icon: "/icons/management.svg",
      title: "Effortless Property Management",
      text: "Let our experts handle your property management with precision and care.",
    },
    {
      id: 4,
      icon: "/icons/investment.svg",
      title: "Smart Investments, Informed Decisions",
      text: "Invest strategically with insights and guidance tailored to your financial goals.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.text}</p>
            <div className={styles.arrow}>↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
