import { Suspense, lazy } from 'react'
import { useHeavyEvaluations, useShouldRender, useCounter } from 'hooks'
import { Spinner } from 'components/ui'

type TProps = { counter?: number | false }
const Component = ({ counter = false }: TProps) => (
	<div>
		<p>HeavyComponent{counter && `counter = ${counter}`}</p>
	</div>
)

type TPromise = { default: React.FunctionComponent<TProps> }
const importHeavyComponent = (): Promise<TPromise> =>
	new Promise((resolve) => {
		setTimeout(() => resolve({ default: Component }), 5000)
	})

const LazyHeavyComponent = lazy(() => importHeavyComponent())

export const HeavyComponentLazy = () => (
	<Suspense fallback={<Spinner children="♽" />}>
		<LazyHeavyComponent />
	</Suspense>
)

export const HeavyComponent = () => {
	const heavyResult = useHeavyEvaluations({ duration: 3 })
	const counter = useCounter(0)
	const shouldRender = useShouldRender(heavyResult)

	return shouldRender && <Component counter={++counter.current} />
}
