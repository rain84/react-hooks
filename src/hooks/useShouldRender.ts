import { useState } from 'react'

type Dependency = boolean | (() => boolean)
type Dependencies = Dependency[]

export const useShouldRender = (...deps: Dependencies) => {
	const isDepsResolved = deps.every((dep) => (typeof dep === 'boolean' ? dep : dep()))
	const [shouldRender, setShouldRender] = useState<Boolean>(isDepsResolved)

	if (!shouldRender && isDepsResolved) {
		setShouldRender(true)
	}

	return shouldRender
}
