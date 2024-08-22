/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./yearBook.module.scss";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { sliderSettings } from "./constant";

const YearBook = () => {
  return (
    <Box className={styles.yearBookMain}>
      <Box className={styles.textSection}>
        <Typography variant="h3">
          ❤️ Your Child's Personalized Yearbook
        </Typography>
        <Typography variant="span">Fully automated.</Typography>
        <Typography variant="span">Highly personalized.</Typography>
      </Box>
      <Box className={`${styles.sliderSection} howWorksSlider`}>
        <Slider {...sliderSettings}>
          <Box className={styles.sliderBox}>
            <Image
              height={400}
              width={500}
              src="/images/firstYearbook.webp"
              quality={100}
              alt="firstYearbook"
            />
          </Box>
          <Box className={styles.sliderBox}>
            <Image
              height={400}
              width={500}
              src="/images/secondYearbook.jpg"
              quality={100}
              alt="secondYearbook"
            />
          </Box>
          <Box className={styles.sliderBox}>
            <Image
              height={400}
              width={500}
              src="/images/thirdYearbook.jpg"
              quality={100}
              alt="thirdYearbook"
            />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default YearBook;
