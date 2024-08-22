/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./notice.module.scss";

const Notice = () => {
  return (
    <Box className={styles.noticeContent}>
      <Typography variant="p" className={styles.noticeParagraph}>
        <Typography variant="strong" className={styles.noticeParagraphContent}>
          💡 Your child's personalized yearbook is a unique keep sake that
          encapsulates their school journey. It integrates personal photos,
          stories, and significant milestones with school events and
          accomplishments, ensuring a comprehensive collection of the year's
          memories to be cherished forever.
        </Typography>
      </Typography>
    </Box>
  );
};

export default Notice;
