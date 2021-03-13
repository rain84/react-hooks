// TODO: 1) different sections for different history entries.
// TODO: 2) fixation of init data, and default reset()-behavior with init data
// TODO: 3) option for cache restrictions

import { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext } from 'react'

const HistoryContext = createContext()

export const HistoryProvider = ({ children }) => {
	const [historyCache, setHistory] = useState([])
	const [cursor, setCursor] = useState(-1)
	const { length } = historyCache

	const pushState = useRef((nextState) => {
		setCursor((cursor) => cursor + 1)
		setHistory((storage) => [...storage, nextState])
	}).current

	const back = useCallback(
		(step = 1) => {
			let nextCursor = cursor - step
			if (nextCursor < 0) nextCursor = 0

			setCursor(nextCursor)
		},
		[cursor]
	)

	const forward = useCallback(
		(step = 1) => {
			let nextCursor = cursor + step
			if (length <= nextCursor) nextCursor = length - 1

			setCursor(nextCursor)
		},
		[cursor, length]
	)

	const reset = useRef((val = null) => {
		setCursor(0)
		setHistory(val === null ? [] : [val])
	}).current

	const API = useMemo(() => ({ pushState, back, forward, reset }), [pushState, back, forward, reset])
	const state = historyCache[cursor]
	const history = [state, API]

	return <HistoryContext.Provider value={history}>{children}</HistoryContext.Provider>
}

export const useHistory = (init) => {
	const history = useContext(HistoryContext)
	const pushState = history[1].pushState

	init = useRef(init).current
	if (history[0] === undefined) history[0] = init

	useEffect(() => {
		if (init !== undefined) {
			pushState(init)
		}
	}, [init, pushState])

	return history
}
