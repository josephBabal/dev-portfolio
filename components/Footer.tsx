import React from 'react'
import styles from '@/styles/footer.module.css'
import LinkedinFooter from '@/components/icons/Linkedin-footer'
import { GithubFooter } from './icons/Github-footer'
import GmailFooter from './icons/Gmail-footer'

const Footer = () => {
  return (
    <div className={styles.bg_container}>
      <div className={`max-width-primary ${styles.content_container}`}>
        <div className={styles.connect_container}>
          <h2 className={`${styles.heading} ${styles.text_connect}`}> Lets connect</h2>
          <div className={`${styles.touch_container}`}> <a href="mailto:babalj457@gmail.com" className={`${styles.heading} ${styles.text_touch}`}> Get in touch </a></div>
        </div>

        <div className={`${styles.social_container}`}>
          <h2 className={`${styles.heading} ${styles.text_copyright}`}> © Joseph Babal</h2>
          <div className={`${styles.icons_container}`}>
            <div className={`${styles.icon}`}>
              <LinkedinFooter />
            </div>
            <div className={`${styles.icon}`}>
              <GithubFooter />
            </div>
            <div className={`${styles.icon}`}>
              <GmailFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer