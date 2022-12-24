import './Select.css'

export function Select({ id, setCallack, label, options }) {
	return (
		<div className='select__container'>
			<label className='select__label' htmlFor='rating-select'>
				{`${label}:`}
			</label>

			<select
				id={`select${id}`}
				className='select__select'
				onChange={ev => {
					setCallack(ev.target.value)
				}}
			>
				{options.map(({ value, text }) => {
					return <option value={value}>{text}</option>
				})}
			</select>
		</div>
	)
}
