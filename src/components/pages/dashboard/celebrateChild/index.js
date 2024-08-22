/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styles from "./celebrateChild.module.scss";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const CeleberateChild = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box className={styles.celebrateChildMain}>
      <Box className={styles.textSection}>
        <Typography variant="h3">Celebrate Your Child</Typography>
        <Typography variant="span">
          From the first day of school to the proud graduation, every play and
          activity holds a story. Our personalized yearbook is a celebration of
          your child's discoveries, friendships, and growth.
        </Typography>
      </Box>
      <Box className={styles.sampleSections}>
        <Box className={styles.tabSecmain}>
          <Typography variant="h5" className={styles.tabTitle}>
            Here are some sample pages
          </Typography>
          <Box className={styles.startTabSection}>
            <Button
              onClick={() => setTab(0)}
              className={`${styles.tab} ${tab === 0 && styles.tabActive}`}
            >
              School Memories
            </Button>
            <Button
              onClick={() => setTab(1)}
              className={`${styles.tab} ${tab === 1 && styles.tabActive}`}
            >
              Child's Creations
            </Button>
            <Button
              onClick={() => setTab(2)}
              className={`${styles.tab} ${tab === 2 && styles.tabActive}`}
            >
              Personal Memories
            </Button>
          </Box>
        </Box>
        {tab === 0 && (
          <Box className={styles.tabResult}>
            <Image
              src="/images/firstChildBook.jpeg"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="firstChildBook"
            />
            <Image
              src="/images/secondChildBook.webp"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="secondChildBook"
            />
            <Image
              src="/images/thirdChildBook.jpeg"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="thirdChildBook"
            />
          </Box>
        )}
        {tab === 1 && (
          <Box className={styles.tabResult}>
            <Image
              src="/images/fourChildBook.webp"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="fourChildBook"
            />
            <Image
              src="/images/fiveChildBook.webp"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="fiveChildBook"
            />
            <Image
              src="/images/sixChildBook.webp"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="sixChildBook"
            />
          </Box>
        )}
        {tab === 2 && (
          <Box className={styles.tabResult}>
            <Image
              src="/images/sevenChildBook.jpeg"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="sevenChildBook"
            />
            <Image
              src="/images/eightChildBook.webp"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="eightChildBook"
            />
            <Image
              src="/images/nineChildBook.jpeg"
              height={200}
              width={200}
              quality={100}
              className={styles.tabResultImg}
              alt="nineChildBook"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CeleberateChild;
