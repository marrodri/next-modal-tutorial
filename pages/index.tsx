import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Modal from "./components/modal";
const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-blue-400 h-screen w-screen">
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <div>test</div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
