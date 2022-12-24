import { useState, useEffect } from 'react'
import { getGifs } from '../services/getGifs'

export function useGifs({ keyword, rating, lang }) {
	const [gifs, setGifs] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getGifs(keyword, rating, lang).then(gettedGifs => {
			setGifs(gettedGifs)
			setLoading(false)
		})
	}, [keyword, rating, lang])

	return { loading, gifs }
}
