import './Searcher.css'
import { ImSearch } from 'react-icons/im'

export function Searcher({ callback }) {
	return (
		<div className='searcher-container'>
			<input
				name='keywordInput'
				type='text'
				placeholder='Find your gif here...'
				className='searcher'
				onChange={ev => {
					callback(ev.target.value)
				}}
			/>
			<button type='submit' className='searcher__button'>
				<ImSearch />
			</button>
		</div>
	)
}
