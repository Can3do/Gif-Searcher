import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Select } from '../Select/Select'
import { Searcher } from '../Searcher/Searcher'

export function Header() {
	const navigate = useNavigate()
	const [keyword, setKeyword] = useState('')
	const [rating, setRating] = useState('g')
	const [lang, setLang] = useState('en')

	const handleSubmit = ev => {
		ev.preventDefault()
		navigate(`/search/${keyword}/${rating}/${lang}`)
	}

	return (
		<header className='header'>
			<Link className='header__title' to='/'>
				Gif-Searcher
			</Link>

			<form className='header__form' onSubmit={handleSubmit}>
				<Select
					id='rating'
					setCallack={setRating}
					label='Rating'
					options={[
						{ value: 'g', text: 'G' },
						{ value: 'pg', text: 'PG' },
						{ value: 'pg-13', text: 'PG-13' },
						{ value: 'r', text: 'R' },
					]}
				/>
				<Select
					id='lang'
					setCallack={setLang}
					label='Lang'
					options={[
						{ value: 'es', text: 'Español' },
						{ value: 'en', text: 'English' },
					]}
				/>

				<Searcher callback={setKeyword} />
			</form>
		</header>
	)
}
