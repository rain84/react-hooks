import { useHeavyEvaluations, useShouldRender, useCounter } from 'hooks'

export const HeavyComponent = () => {
	const heavyResult = useHeavyEvaluations({ duration: 3 })
	const counter = useCounter(0)
	const shouldRender = useShouldRender(heavyResult)

	if (shouldRender) console.log(`shouldRender: ${shouldRender.toString()}, counter.current: ${counter.current}`)

	return (
		shouldRender && (
			<div>
				<p>HeavyComponent counter = {++counter.current}</p>
			</div>
		)
	)
}
