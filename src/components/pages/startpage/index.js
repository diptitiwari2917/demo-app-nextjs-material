import React from "react";
import styles from "./main.module.scss";
import { Box,Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const StartPage = () => {
  const router = useRouter()

  return (
    <Box className={styles.startPageMain}>
      <Typography variant="h2" className={styles.title}>
        True North Early Learning Academy at Pinecrest
      </Typography>
      <Typography className={styles.subTitle}>
        invites you to buy your childs Personalized Yearbook and preserve
        growing up memories forever.
      </Typography>
      <Typography className={styles.semiTitle}>
        MyVity is an AI powered service that automatically creates your child
        personalized yearbook. Parents just need to provide some basic info
        about the child and MyVity does the rest.
      </Typography>
      <Button onClick={()=>router.push("/dashboard")}>
        <Image className={styles.arrowImg} width={50} height={50} quality={100} src="/images/right-arrow-icon.png" alt="right-arrow" />
      </Button>
    </Box>
  );
};

export default StartPage;
