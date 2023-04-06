import { FaPlay } from 'react-icons/fa'

function Button({ action, color, title, icon, extraClass, isdisabled }) {
	return (
		<button
			onClick={action}
			disabled={isdisabled}
			className={` ${extraClass ? extraClass : 'text-xs w-fit'} bg-${color} ${
				color === 'fade' ? 'text-[#fff]' : 'text-primary'
			} py-4 px-10 flex disabled:cursor-not-allowed disabled:opacity-60  items-center  disabled:text-black/50 filter  md:text-base rounded-full shadow-xl  my-auto`}
		>
			{title}
			{icon ? <FaPlay className='ml-3 h-4 w-4' /> : ''}
		</button>
	)
}

export default Button
