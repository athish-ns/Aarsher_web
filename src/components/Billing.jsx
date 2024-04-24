import React from 'react'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        {/* Replaced the img tag with text */}
        <div className='absolute z-[3] -left-1 top-0 w-[100%] h-[100%] flex items-center justify-center'>
          <h2 className='text-white text-center font-bold text-5xl sm:text-6xl leading-tight'>
            Let your <br className="sm:hidden" /> 
            voice control <br className="sm:hidden" /> 
            your devices
          </h2>
        </div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Meet Cleó, your open-source personal AI assistant designed to revolutionize how you interact with your system. With Cleó, you can effortlessly control your laptop using voice commands, transforming mundane tasks into seamless experiences. Whether it's sending emails, scheduling meetings, or navigating applications, Cleó empowers you to command your digital world with ease and style. Experience the future of productivity with Cleó!
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        </div>
      </div>  
    </section>
  )
}

export default Billing
