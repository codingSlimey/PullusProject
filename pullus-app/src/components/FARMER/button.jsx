import { FaPlay } from 'react-icons/fa'

function Button(props) {
	return (
		<button
			onClick={props.action}
			className={`w-fit bg-${props.color} ${
				props.color === 'primary' ? 'text-[#fff]' : 'text-primary'
			} py-4 px-10 flex  items-center rounded-full shadow-xl  my-auto`}
		>
			{props.title}
			{props.icon ? <FaPlay className='ml-3 h-4 w-4' /> : ''}
		</button>
	)
}

export default Button
