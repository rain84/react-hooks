import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react'

type THook = <T>(init: T) => [T, T | undefined, Dispatch<SetStateAction<T>>]

export const useStateWithPrev: THook = (init) => {
	const [state, setState] = useState(init)
	const prevState = useRef<typeof init | undefined>()

	useEffect(() => {
		prevState.current = state
	}, [state])

	return [state, prevState.current, setState]
}
