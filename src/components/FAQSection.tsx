"use client";
import { useState } from "react";
import styles from "@/styles/FAQSection.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I search for properties on Estatein?",
      answer:
        "Simply use our property search tool to filter listings by location, price range, property type, and more. You can also save your favorite listings for later viewing.",
    },
    {
      id: 2,
      question: "Can I schedule property tours through Estatein?",
      answer:
        "Absolutely! Once you find a property you're interested in, you can schedule a tour directly through our platform or contact one of our agents.",
    },
    {
      id: 3,
      question: "How can I list my property for sale?",
      answer:
        "To list your property, create an account with Estatein, then go to the 'List Your Property' section and provide the necessary details, photos, and pricing information.",
    },
    {
      id: 4,
      question: "Is there a fee for using Estatein's services?",
      answer:
        "Estatein offers free browsing and property search tools. Listing or premium marketing options may have associated costs, which are clearly displayed before you commit.",
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about buying, selling, and managing
            properties with Estatein.
          </p>
        </div>
        <button className={styles.viewAll}>View All FAQ’s</button>
      </div>

      <div className={styles.list}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.item}>
            <button
              className={`${styles.question} ${
                openId === faq.id ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>{openId === faq.id ? "−" : "+"}</span>
            </button>
            <div
              className={`${styles.answerWrapper} ${
                openId === faq.id ? styles.open : ""
              }`}
            >
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
