
import DarkModeToggle from './DarkModeToggle'

function Header() {
  return (

    <div className='flex justify-around border-solid max-w-[88%]border-solid border-0  ml-[200px]'>

      <div>
        <h4 className='font-inter text-[32px] font-bold leading-[72px]  text-customGreen'>melisa</h4>
      </div>
      <h4 className='font-inter text-[15px] font-bold leading-[18.15px] tracking-[0.1em] text-left custom-text  text-customGreen'>SWITCH <span className='text-customWhite'>TO ENGLISH</span></h4>



      <div className=" flex justify-start items-start leading-[18.15px] ">
        <DarkModeToggle className='ml-2' />
      </div>

    </div>
  )
}

export default Header