import React from 'react'
import { ok } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Don't settle for less <br className='sm:block hidden'/>in any aspect.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Cleó introduces an advanced voice recognition system that revolutionizes task completion. With effortless voice commands, tasks are seamlessly executed without the need for manual input. Simply speak your commands and Cleó will take care of the rest, making your interactions smoother and more efficient than ever before.        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={ok}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
