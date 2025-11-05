import styles from "@/styles/Testimonials.module.css";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Wade Warren",
      location: "USA, California",
      rating: 5,
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      avatar: "/avatars/avatar1.jpg",
    },
    {
      id: 2,
      name: "Emelia Thomson",
      location: "USA, Florida",
      rating: 5,
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn’t be happier with the results.",
      avatar: "/avatars/avatar2.jpg",
    },
    {
      id: 3,
      name: "John Mars",
      location: "USA, Nevada",
      rating: 5,
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      avatar: "/avatars/avatar3.jpg",
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div>
          <h2>What Our Clients Say</h2>
          <p>
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate needs.
          </p>
        </div>
        <button className={styles.viewAll}>View All Testimonials</button>
      </div>

      <div className={styles.grid}>
        {testimonials.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.stars}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className={styles.text}>{item.text}</p>
            <div className={styles.user}>
              <Image
                src={item.avatar}
                alt={item.name}
                width={50}
                height={50}
                className={styles.avatar}
              />
              <div>
                <h4>{item.name}</h4>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
