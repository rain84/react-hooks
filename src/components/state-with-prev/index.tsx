import { useStateWithPrev } from 'hooks'

export const CounterWithPrevState = () => {
	const [count, prevCount, setCount] = useStateWithPrev<number>(0)

	return (
		<>
			<h1>
				Now: {count}, before: {prevCount}
			</h1>
			<button
				style={{ width: '10rem', fontSize: 'larger', fontWeight: 'bold' }}
				onClick={() => setCount((c: number) => c + 1)}
			>
				Increment
			</button>
		</>
	)
}
