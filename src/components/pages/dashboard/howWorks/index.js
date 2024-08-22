/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./howWorks.module.scss";

const HowWorks = () => {
  return (
    <Box className={styles.howWorksMainContainer}>
      <Box className={styles.howWorksContainer}>
        <Typography variant="h3" className={styles.mainHeading}>
          How it Works?
        </Typography>
        <Box className={styles.howWorksContent}>
          <Box className={styles.sparkleContainer}>
            <Image
              className={styles.sparkleContainer}
              height={40}
              width={40}
              alt="sparkel"
              src="/images/sparkel.png"
              quality={100}
            />
          </Box>
          <Box className={styles.paragraphs}>
            <Typography variant="p">
              Every child gets their own personalized yearbook, reflecting their
              specific memories and experiences at home and at school.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.howWorksContent}>
          <Box className={styles.sparkleContainer}>
            <Image
              className={styles.sparkleContainer}
              height={40}
              width={40}
              alt="frame"
              src="/images/frame.png"
              quality={100}
            />
          </Box>
          <Box className={styles.paragraphs}>
            <Typography variant="p">
              We collect photos from your school. You have the option to choose
              the photos you want to include in the book.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.howWorksContent}>
          <Box className={styles.sparkleContainer}>
            <Image
              className={styles.sparkleContainer}
              height={40}
              width={40}
              alt="security"
              src="/images/security.png"
              quality={100}
            />
          </Box>
          <Box className={styles.paragraphs}>
            <Typography variant="p">
              We design and create your personalized yearbook so you don't have
              to do any work.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.howWorksContent}>
          <Box className={styles.sparkleContainer}>
            <Image
              className={styles.sparkleContainer}
              height={40}
              width={40}
              alt="heart"
              src="/images/heart.png"
              quality={100}
            />
          </Box>
          <Box className={styles.paragraphs}>
            <Typography variant="p">
              <Typography variant="span" className={styles.paragraphContent}>
                OPTIONAL:
              </Typography>{" "}
              Add memories from vacations, family gatherings, or moments with
              loved ones and preserve those memories forever.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.howWorksContent}>
          <Box className={styles.sparkleContainer}>
            <Image
              className={styles.sparkleContainer}
              height={40}
              width={40}
              alt="notepad"
              src="/images/notepad.png"
              quality={100}
            />
          </Box>
          <Box className={styles.paragraphs}>
            <Typography variant="p">
              <Typography variant="span" className={styles.paragraphContent}>
                OPTIONAL:
              </Typography>{" "}
              Include personal messages and heartfelt notes, adding a personal
              touch that will be cherished for years
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWorks;