import { useState, useRef, useEffect } from 'react'

function Clock() {
	const [time, setTime] = useState(new Date())
	const format = useRef(
		(time: Date) =>
			`${[time.getHours(), time.getMinutes(), time.getSeconds()]
				.map((val) => val.toString().padStart(2, '0'))
				.join(' - ')}`
	).current

	useEffect(() => {
		const id = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(id)
	}, [time])

	return <h1>{format(time)}</h1>
}

export const TestPage = () => (
	<>
		<Clock />
	</>
)
