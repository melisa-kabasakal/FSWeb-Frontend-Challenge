
import DarkModeToggle from './DarkModeToggle'

function Header() {
  return (
    <div className="bg-[#4731D3] bg-no-repeat bg-right h-[450px] w-[70%]">
      <div className='flex justify-between ml-10 mr-4'>
        <h4 className='font-inter text-[32px] font-bold leading-[72px] text-left text-customGreen'>melisa</h4>
        <h4 className='font-inter text-[15px] font-bold leading-[72px]  text-customGreen'>SWITCH <span className='text-customWhite'>TO ENGLISH</span></h4>


        <div className="bg-customGreen flex justify-start items-start  absolute right-0 w-[30%] h-[450px]">
          <DarkModeToggle className='ml-4' />
        </div>
      </div>

    </div>
  )
}

export default Header