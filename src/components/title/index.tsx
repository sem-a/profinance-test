import React from 'react'
import styles from './index.module.css';

type PropsH2 = {
    children: React.ReactNode;
    textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent' 
    margin?: string | number | undefined; 
}

export const H2: React.FC<PropsH2> = ({children, textAlign, margin}) => {
  return (
    <h2 style={{textAlign, margin}} className={styles.title}>{children}</h2>
  )
}
