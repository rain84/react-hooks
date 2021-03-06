import { useState, useEffect } from 'react'

type THook = (key: string, initialValue: unknown) => ReturnType<typeof useState>

export const useLocalStorage: THook = (key, initialValue) => {
	const [value, update] = useState(() => {
		let value

		try {
			value = JSON.parse(window.localStorage.getItem(key) || '""')
		} catch {}

		return value || initialValue
	})

	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value))
		} catch {}
	}, [key, value])

	return [value, update]
}
