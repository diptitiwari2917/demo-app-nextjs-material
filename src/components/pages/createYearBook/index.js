/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import styles from "./createYearBook.module.scss";
import Image from "next/image";

const CreateYearBook = () => {
  const [selectedValue, setSelectedValue] = useState("school");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box className={styles.createWorkBookContainer}>
      <Typography variant="h3" className={styles.titleMain}>
        Create Your Child's Personalized Yearbook
      </Typography>
      <Image
        height={198}
        width={198}
        className={styles.parentsImg}
        src="/images/parents-img.png"
        alt="parents-img"
      />
      <Box className={styles.enterEmailSection}>
        <OutlinedInput
          placeholder="Enter parent's email"
          className={styles.emailInput}
        />
      </Box>
      <Box className={styles.noticeSec}>
        <Typography>
          We will use your email to set up your account. After completing your
          purchase and activating your account, you you can start adding
          personal memories and preserve those special moments forever. If you
          already have an account with us, please use the same email address to
          ensure seamless access.
        </Typography>
      </Box>
      <Box className={styles.childsInfoContainer}>
        <Box className={styles.uperlayer} />
        <Typography variant="h2" className={styles.childParagraph}>
          Enter Child's Info
        </Typography>
        <Box className={styles.formContainer}>
          <Box className={styles.formContent}>
            <OutlinedInput
              className={styles.inputFields}
              placeholder="First name"
            />
            <OutlinedInput
              className={styles.inputFields}
              placeholder="Middle name"
            />
            <OutlinedInput
              className={styles.inputFields}
              placeholder="Last name"
            />
          </Box>
        </Box>
        <Typography variant="p" className={styles.childFooterParagraph}>
          * Your childs first name and last name are required
        </Typography>
      </Box>
      <Box className={styles.selectGenderContainer}>
        <Box className={styles.uperlayer} />
        <Typography variant="h2" className={styles.selectGenderParagraph}>
          Select Gender
        </Typography>
        <Box className={styles.imageContainer}>
          <Box className={styles.imageContent}>
            <Image
              className={styles.siblingImageOne}
              height={180}
              width={180}
              alt="siblingImageOne"
              src="/images/gender-girl.webp"
              quality={100}
            />
          </Box>
          <Box className={styles.imageContent}>
            <Image
              className={styles.siblingImageOne}
              height={180}
              width={180}
              alt="siblingImageTwo"
              src="/images/gender-boy.webp"
              quality={100}
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles.selectCoverMain}>
        <Box className={styles.uperlayer} />
        <Typography variant="h2" className={styles.childParagraph}>
          Select Cover
        </Typography>
        <Box className={styles.covers}>
          <Box className={styles.cover}>
            <Typography variant="h5">Saddle Stitch</Typography>
            <Typography variant="span">32 pages</Typography>
            <Typography variant="h3">$25.00</Typography>
            <Typography>Staple-bound for a clean and simple finish</Typography>
          </Box>
          <Box className={styles.cover}>
            <Typography variant="h5">Saddle Stitch</Typography>
            <Typography variant="span">32 pages</Typography>
            <Typography variant="h3">$25.00</Typography>
            <Typography>Staple-bound for a clean and simple finish</Typography>
          </Box>
          <Box className={styles.cover}>
            <Typography variant="h5">Saddle Stitch</Typography>
            <Typography variant="span">32 pages</Typography>
            <Typography variant="h3">$25.00</Typography>
            <Typography>Staple-bound for a clean and simple finish</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.siblingContainer}>
        <Image
          className={styles.siblingImage}
          height={180}
          width={180}
          alt="siblingImage"
          src="/images/siblingImage.webp"
          quality={100}
        />
        <Typography variant="h2" className={styles.siblingParagraph}>
          Get a personalized yearbook for siblings
        </Typography>
        <Box className={styles.radioButtonContainer}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="school"
              name="radio-buttons-group"
              value={selectedValue}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                className={styles.radioLabel}
                value="school"
                control={<Radio size="small" />}
                label="my child attends same school"
              />
              <FormControlLabel
                className={styles.radioLabel}
                value="graduate"
                control={<Radio size="small" />}
                label="my child has graduated from same school"
              />
              <FormControlLabel
                className={styles.radioLabel}
                value="different"
                control={<Radio size="small" />}
                label="my child goes to or has graduated from a different school"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {selectedValue === "different" && (
          <Box className={styles.additionalContent}>
            <OutlinedInput placeholder="School name" size="small" />
            <Box className={styles.formContent}>
              <OutlinedInput placeholder="City" size="small" />
              <OutlinedInput placeholder="State" size="small" />
            </Box>

            <Typography variant="p" className={styles.siblingParagraphs}>
              If your school is part of our network, we will gather photos from
              there. Otherwise, you can share an album or upload school photos
              to Google drive. We will send an email with further details once
              you have placed your order.
            </Typography>
          </Box>
        )}

        <Box>
          <Button className={styles.addAnotheButton}>Add another child</Button>
        </Box>
      </Box>
      <Box className={styles.shippingWrap}>
        <Box className={styles.shippingInnerWrap}>
          <Typography className={styles.shippingTitle}>
            Select Shipping
          </Typography>
          <Typography className={styles.shippingSubTitle}>
            Your Personalized Yearbook will be delivered at the end of the
            school year. We will keep you updated along the way.
          </Typography>

          <Box className={styles.inputWrapper}>
            <Box className={styles.detailWrap}>
              <Box className={styles.priceWrap}>
                <Typography className={styles.detailTitle}>
                  Ship to Home
                </Typography>
                <Typography className={styles.detailTitle}>$6.99</Typography>
              </Box>
              <Typography className={styles.detailSubTitle}>
                5 to 7 days
              </Typography>
            </Box>
            <OutlinedInput
              className={styles.inputField}
              placeholder="Suite #"
            />
            <OutlinedInput className={styles.inputField} placeholder="Street" />
            <OutlinedInput className={styles.inputField} placeholder="City" />
            <Box className={styles.stateDeatilWrap}>
              <OutlinedInput
                className={styles.stateInputField}
                placeholder="State"
              />
              <OutlinedInput
                className={styles.zipCodeInputField}
                placeholder="Zip Code"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateYearBook;
