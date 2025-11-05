import styles from "@/styles/FeaturedProperties.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: "/properties/property-1.jpg",
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. Read More",
      price: "$550,000",
      features: [
        { icon: "/icons/bed.svg", text: "4-bedroom" },
        { icon: "/icons/bath.svg", text: "3-bathroom" },
        { icon: "/icons/home.svg", text: "Villa" },
      ],
    },
    {
      id: 2,
      image: "/properties/property-2.jpg",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views. Read More",
      price: "$550,000",
      features: [
        { icon: "/icons/bed.svg", text: "2-bedroom" },
        { icon: "/icons/bath.svg", text: "2-bathroom" },
        { icon: "/icons/apartment.svg", text: "Apartment" },
      ],
    },
    {
      id: 3,
      image: "/properties/property-3.jpg",
      title: "Rustic Retreat Cottage",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community. Read More",
      price: "$550,000",
      features: [
        { icon: "/icons/bed.svg", text: "3-bedroom" },
        { icon: "/icons/bath.svg", text: "3-bathroom" },
        { icon: "/icons/home.svg", text: "Villa" },
      ],
    },
  ];

  return (
    <section className={styles.featuredSection}>
      <div className={styles.header}>
        <div>
          <h2>Featured Properties</h2>
          <p>
            Explore our handpicked selection of featured properties. Each listing offers
            a glimpse into exceptional homes and investments available through Estatein.
          </p>
        </div>
        <Link href="/properties" className={styles.viewAll}>
          View All Properties
        </Link>
      </div>

      <div className={styles.grid}>
        {properties.map((property) => (
          <div key={property.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={property.image}
                alt={property.title}
                width={400}
                height={260}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3>{property.title}</h3>
              <p className={styles.desc}>{property.description}</p>
              <div className={styles.features}>
                {property.features.map((f, index) => (
                  <div key={index} className={styles.feature}>
                    <Image src={f.icon} alt={f.text} width={16} height={16} />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.footer}>
                <p className={styles.price}>Price: {property.price}</p>
                <Link href={`/property/${property.id}`} className={styles.button}>
                  View Property Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
