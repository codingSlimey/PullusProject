import { FaPlay } from 'react-icons/fa'

function Button({action,color,title,icon}) {
	return (
		<button
			onClick={action}
			className={`w-fit bg-${color} ${
				color === 'fade' ? 'text-[#fff]' : 'text-primary'
			} py-4 px-10 flex  items-center rounded-full shadow-xl  my-auto`}
		>
			{title}
			{icon ? <FaPlay className='ml-3 h-4 w-4' /> : ''}
		</button>
	)
}

export default Button
