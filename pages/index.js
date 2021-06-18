import Head from "next/head";
import styles from "../components/Sidebar";
import Sidebar from "../components/Sidebar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}