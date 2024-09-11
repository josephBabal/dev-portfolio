import React, { useEffect } from 'react'
import styles from '@/components/loader.module.css'

type LoaderProps = {
  setLoading: (value: boolean) => void;
} 

const Loader = ({ setLoading}: LoaderProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <div>
      <div>
        <div className={styles.loading_bar}></div>
      </div>
    </div>
  )
}

export default Loader