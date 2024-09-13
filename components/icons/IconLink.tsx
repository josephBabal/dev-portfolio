import styles from '@/styles/hero-icons.module.css'
import { DELAY, START_DURATION } from '@/utils/config';
import { MotionDiv } from '../MotionDiv';
import heroStyles from '@/styles/hero.module.css'


type IconLinkProps = {
  index: number;
  delay: number;
  href: string;
  containerClassName: 'github_container' | 'linkedin_container' | 'gmail_container';
  bgClassName: 'github_bg' | 'linkedin_bg' | 'gmail_bg';
  svgProps: any;
  paths: any;
};

const IconLink: React.FC<IconLinkProps> = ({ index, delay, href, containerClassName, bgClassName, svgProps, paths }) => {
  const containerDuration = 0.4;
  const combinedDelay = START_DURATION + delay;

  const containerVariants = {
    hidden: {  scale: 0 },
    visible: {  scale: 1, transition: { duration: containerDuration, delay: combinedDelay } },
  }
  
  
  const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: combinedDelay + containerDuration } },
  }
  
  const floatUpVariants = {
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 3, 
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const floatDownVariants = {
    visible: {
      y: [0, 10, 0],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const chosenVariants = index === 0 ? floatUpVariants: floatDownVariants;


  return (
    <MotionDiv
      className={heroStyles[containerClassName]}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <MotionDiv
        variants={chosenVariants}
        animate='visible'
      >


      <a className={styles.icon_container} href={href}>
        <div className={styles[bgClassName]}></div>
        <MotionDiv
          variants={iconVariants}
          initial='hidden'
          animate='visible'
        >
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          {...svgProps}
        >
          {paths.map((path: any, index: number) => (
            <path key={index} {...path} />
          ))}
        </svg>
        </MotionDiv>
      </a>
      </MotionDiv>
    </MotionDiv>
  );
};

export default IconLink;
