import { Gif } from '../Gif/Gif'
import { useParams } from 'react-router-dom'
import './Gifs.css'
import { useGifs } from '../../Hooks/useGifs'
import { Loading } from '../Loading/Loading'

export function Gifs() {
	const { keyword, rating, lang } = useParams()
	const { loading, gifs } = useGifs({ keyword, rating, lang })

	return (
		<div className='container'>
			{loading ? (
				<Loading />
			) : (
				<div className='gifsContainer'>
					{gifs.map(singleGif => {
						const { url, id } = singleGif
						return <Gif url={url} key={id} />
					})}
				</div>
			)}
		</div>
	)
}
