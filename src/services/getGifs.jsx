export async function getGifs(keyword, rating, lang) {
	const apiKey = 'AIGdY2LL7i0nPVYsbdoU8wfQCEIjLCju'
	const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=${rating}&lang=${lang}`

	const response = await fetch(apiUrl).then(res => res.json())
	const { data } = response
	const gifs = data.map(singleGif => {
		const url = singleGif.images.downsized_medium.url
		const id = singleGif.id
		return { id, url }
	})
	return gifs
}
