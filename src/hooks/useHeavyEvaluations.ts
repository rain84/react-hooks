import { useState, useEffect } from 'react'
import { useCounter } from './useCounter'

type Hook = (props?: { duration?: number; withLog?: boolean }) => () => boolean

const defaultProps = { duration: 1, withLog: true }

export const useHeavyEvaluations: Hook = (props = defaultProps) => {
	const { duration, withLog } = { ...defaultProps, ...props }
	const rerender = useState(false)
	const targetTime = useState(Date.now() + duration * 1000)[0]
	const counter = useCounter()
	const isDone = 0 <= Date.now() - targetTime

	useEffect(() => {
		if (isDone) return
		if (withLog) console.log('useHeavyEvaluations : ', ++counter.current)

		setTimeout(() => rerender[1](!rerender[0]))
	}, [rerender, isDone, counter, withLog])

	return () => isDone
}
