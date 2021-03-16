import { useState, useRef, useEffect } from 'react'

export const useDataLoadingState = <T extends unknown>(init: T) => {
	const def = {
		pristine: false,
		loading: false,
		success: false,
		error: false
	}

	const prevInit = useRef<T | undefined>()

	const isPristine = () => prevInit.current === undefined || prevInit.current !== init
	const [state, setState] = useState({
		...def,
		pristine: isPristine()
	})

	useEffect(() => {
		prevInit.current = init

		if (isPristine()) {
			setState({ ...def, pristine: true })
		}

		// eslint-disable-next-line
	}, [init])

	const API = {
		loading: () => setState((s) => ({ ...def, loading: true, pristine: s.pristine })),
		success: () => setState({ ...def, success: true }),
		error: () => setState({ ...def, error: true })
	}

	return { is: state, set: API }
}
