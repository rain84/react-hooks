import { useHeavyEvaluations, useShouldRender, useCounter } from 'hooks'

export const HeavyComponent = () => {
	const heavyResult = useHeavyEvaluations({ duration: 3 })
	const counter = useCounter(0)
	const shouldRender = useShouldRender(heavyResult)

	return (
		shouldRender && (
			<div>
				<p>HeavyComponent counter = {++counter.current}</p>
			</div>
		)
	)
}
