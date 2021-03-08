import { useState, useEffect, useRef } from 'react'

type THook = (key: string, initialValue: unknown) => ReturnType<typeof useState>

export const useLocalStorage: THook = (key, initialValue) => {
	const [value, update] = useState(() => {
		let value = window.localStorage.getItem(key)

		if (!value) return initialValue

		try {
			return JSON.parse(value)
		} catch {
			window.localStorage.removeItem(key)
			return initialValue
		}
	})

	const prevKey = useRef(key)

	useEffect(() => {
		if (prevKey.current !== key) {
			window.localStorage.removeItem(prevKey.current)
			prevKey.current = key
		}

		window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, update]
}
