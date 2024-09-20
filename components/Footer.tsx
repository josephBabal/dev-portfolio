"use client";

import React, { useRef } from "react";
import styles from "@/styles/footer.module.css";
import LinkedinFooter from "@/components/icons/Linkedin-footer";
import { GithubFooter } from "./icons/Github-footer";
import GmailFooter from "./icons/Gmail-footer";
import { CustomVisibleEase, DELAY } from "@/utils/config";
import { MotionDiv } from "./MotionDiv";
import { useInView } from "framer-motion";

const connectVariants = {
  hidden: { opacity: 0, y: 50, transition: { duration: DELAY } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: CustomVisibleEase, delay: DELAY },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 50, transition: { duration: DELAY } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: CustomVisibleEase },
  },
};

const Footer = () => {
  const connectRef = useRef(null);
  const socialRef = useRef(null);
  const isConnectInView = useInView(connectRef, { once: true, amount: 0 });
  const isSocialInView = useInView(socialRef, { once: true, amount: 1 });

  return (
    <footer className={`footer-container`}>
      <div className={styles.bg_container}>
        <div className={`max-width-primary ${styles.content_container}`}>
          <MotionDiv
            className={styles.connect_container}
            variants={connectVariants}
            initial="hidden"
            animate={isConnectInView ? "visible" : "hidden"}
            ref={connectRef}
          >
            <h2
              className={`${styles.heading} ${styles.text_connect}`}
              ref={socialRef}
            >
              {" "}
              Lets connect
            </h2>
            <div className={`${styles.touch_btn_container}`}>
              {" "}
              <a
                href="mailto:babalj457@gmail.com"
                className={`${styles.heading} ${styles.text_touch}`}
              >
                {" "}
                Get in touch{" "}
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            className={`${styles.social_container}`}
            variants={socialVariants}
            initial="hidden"
            animate={isSocialInView ? "visible" : "hidden"}
          >
            <h2 className={`${styles.heading} ${styles.text_copyright}`}>
              {" "}
              © Joseph Babal
            </h2>
            <div className={`${styles.icons_container}`}>
              <div className={`${styles.icon} social-icon-link`}>
                <LinkedinFooter />
              </div>
              <div className={`${styles.icon} social-icon-link`}>
                <GithubFooter />
              </div>
              <div className={`${styles.icon} social-icon-link`}>
                <GmailFooter />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
