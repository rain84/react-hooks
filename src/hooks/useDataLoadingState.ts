import { useState, useEffect } from 'react'
import { useStateWithPrev } from 'hooks/useStateWithPrev'

interface ShapeOfState {
	pristine: boolean
	loading: boolean
	success: boolean
	error: null | Error
}

export const useDataLoadingState = <T extends unknown>(initialData: T) => {
	const def: ShapeOfState = {
		pristine: false,
		loading: false,
		success: false,
		error: null
	}

	const [, prevInit, updatePrev] = useStateWithPrev<T>(initialData)
	const isPristine = () => prevInit === undefined || prevInit !== initialData

	useEffect(() => {
		if (isPristine()) {
			setState({ ...def, pristine: true })
			updatePrev(initialData)
		}
		// eslint-disable-next-line
	}, [initialData])

	const [state, setState] = useState({
		...def,
		pristine: isPristine()
	})

	const API = {
		setLoading: () => setState((s) => ({ ...def, loading: true, pristine: s.pristine })),
		setSuccess: () => setState({ ...def, success: true }),
		setError: (e: Error) => setState({ ...def, error: e })
	}

	return {
		is: state,
		...API
	}
}
