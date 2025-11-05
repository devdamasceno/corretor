import Link from "next/link";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Página não encontrada</p>
      <p className={styles.description}>
        Parece que você se perdeu entre os imóveis... 🏡
      </p>
      <Link href="/" className={styles.homeButton}>
        Voltar à página inicial
      </Link>
    </div>
  );
}
