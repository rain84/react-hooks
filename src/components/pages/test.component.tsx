import { useState } from 'react'

export function Counter({ initialCount }: { initialCount: number }) {
	const [count, setCount] = useState<number>(initialCount)
	return (
		<>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(count + 1)}>+</button>
		</>
	)
}

export const TestPage = () => <Counter initialCount={0} />
