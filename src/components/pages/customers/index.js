/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./customers.module.scss";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { sliderSettings } from "./constant";

const Customers = () => {
  return (
    <Box className={styles.customersMainContainer}>
      <Box className={styles.customerHeading}>
        <Typography variant="h3" className={styles.customerHeadingContent}>
          Our Customers
        </Typography>
        <Typography variant="h3" className={styles.customerHeadingContent}>
          Love Us
        </Typography>
      </Box>
      <Box className={styles.customerParagraph}>
        <Typography variant="strong">
          Personalized Memory Book that preserves childhood memories and is
          effortless to create. What else can you ask for?
        </Typography>
      </Box>
      <Box className={styles.customerMainContainer}>
        <Box className={`${styles.customerDetailsContainer} howWorksSlider`}>
        <Slider {...sliderSettings}>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-one-image"
              src="/images/customer-one-image.png"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              I wanted to take a moment to express my heartfelt appreciation for
              the exceptional personalized memory books MyVity provided for the
              children at our preschool. As a preschool owner, I was truly
              impressed by the level of personalization and the profound impact
              these books had on both the children and their parents. The
              reaction from parents was incredible. I witnessed firsthand how a
              few parents were moved to tears as they flipped through the pages
              of their child's personalized memory book. These books not only
              captured precious moments but also became a tangible symbol of
              their child's growth and milestones during their time at our
              preschool. I recommend MVity's Personalized Memory Books to all
              schools and I am truly grateful for the joy and nostalgia they
              have brought to our preschool community.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Safia
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Owner
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-two-image"
              src="/images/customer-two-image.jpeg"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              We are thrilled to share our wonderful experience with MyVity, as
              they masterfully brought to life stunningly beautiful and uniquely
              personalized keepsake books for our students. The entire process
              was not only remarkably straightforward but also remarkably
              hands-off for our staff, thanks to MyVity's team handling of every
              detail. Their seamless and intuitive process created this
              one-of-a-kind keepsake without burdening our staff with additional
              tasks. MyVity's team took charge of every aspect, leaving us
              astounded by their efficiency and dedication. What truly sets
              MyVity apart is the level of personalization they achieved for
              each child. Every page of these books radiates the uniqueness of
              each student, capturing their journey, achievements, and growth
              during their preschool years. We would highly recommend MyVity to
              other schools.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Renuka
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Owner
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-three-image"
              src="/images/customer-three-image.webp"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              A perfect personalized gift for your child. My child loved seeing
              his name, pictures, and avatar in the book. I love this concept of
              preschool memory book as these are most cherished growing-up
              memories.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Safia
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Owner
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-four-image"
              src="/images/customer-four-image.jpeg"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              I am happy to share my heartfelt appreciation for the incredible
              impact that MyVity's personalized memory books have brought to our
              school community. One of the features of MyVity's service is its
              ability to effortlessly bulk download photos from our Brightwheel
              account. Our teachers did not have to do anything and MyVity took
              care of every detail from selecting photos, creating layout, and
              adding beautiful rhyming text. What truly sets MyVity apart is the
              personalized touch they bring to each memory book. Their
              meticulously curated memory books captured every precious moment,
              from classroom activities to special events, ensuring that no
              memory goes undocumented.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Rupa
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Owner
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-five-image"
              src="/images/customer-five-image.webp"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              Parents and children love the personalized memory books from
              MyVity. It is a novel gift item with preschool memories
              beautifully put together in a keepsake that kids will cherish
              forerver.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Shelia
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Owner
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-six-image"
              src="/images/customer-six-image.webp"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              Such a great book. I got emotional while reading it to my son.
              This is a great way to preserve his growing up memories. I would
              love to get it every year for my child.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Priya
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Parent
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-seven-image"
              src="/images/customer-seven-image.jpeg"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              As a school director, I'm always on the lookout for innovative and
              hassle-free ways to create memorable experiences for our students.
              MyVity truly exceeded my expectations. The process was incredibly
              simple and stress- free. All we had to do was share the pictures
              in bulk and MyVity took care of the rest. The team at MyVity
              ensured that each child's book was beautifully personalized,
              capturing their unique personalities and interests. I highly
              recommend MyVity personalized books to all schools.It's a great
              way to celebrate each child's individuality and create lasting
              memories.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Parisa
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Director
            </Typography>
          </Box>
          <Box className={styles.detailsOfPerson}>
            <Image
              className={styles.customerImage}
              height={225}
              width={225}
              alt="customer-eight-image"
              src="/images/customer-eight-image.webp"
              quality={100}
            />
            <Image
              className={styles.quoteImage}
              height={20}
              width={27}
              alt="quote"
              src="/images/quote.png"
              quality={100}
            />
            <Typography variant="p" className={styles.detailParagraph}>
              Love getting personalized memory books from MyVity. As a preschool
              teacher, I have no time to sort and filter pictures, but with
              MyVity, I don’t need to worry about all these details.
            </Typography>
            <Typography variant="h4" className={styles.nameOfCustomer}>
              Ms.Fida
            </Typography>
            <Typography variant="p" className={styles.positionOfCustomer}>
              Head Teacher
            </Typography>
          </Box>
        </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Customers;
