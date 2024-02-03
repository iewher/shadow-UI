"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.Header}>
      <div className={styles.Title} onClick={() => router.push("/")}>
        Shadow UI
      </div>
      <div className={styles.Input}>
        <input placeholder="Поиск..." />
      </div>
      <div className={styles.Nav}>
        <button>Design</button>
        <button>Development</button>
        <button>Components</button>
        <button>Blog</button>
        <button>Resources</button>
      </div>
      <div className={styles.Links}>
        <Link target="_blank" href={"https://github.com/iewher/shadow-UI"}>
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Header;
