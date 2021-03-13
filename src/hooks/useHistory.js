import { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext } from 'react'

const HistoryContext = createContext()

export const HistoryProvider = ({ children }) => {
	const [historyStorage, setHistory] = useState([])
	const [cursor, setCursor] = useState(-1)
	const { length } = historyStorage

	const pushState = useRef((nextState) => {
		setCursor((cursor) => cursor + 1)
		setHistory((storage) => [...storage, nextState])
	}).current

	const back = useCallback(() => {
		if (0 < cursor) setCursor((cursor) => cursor - 1)
	}, [cursor])

	const forward = useCallback(() => {
		if (cursor < length - 1) setCursor((cursor) => cursor + 1)
	}, [cursor, length])

	const reset = useRef((val = null) => {
		setCursor(0)
		setHistory(val === null ? [] : [val])
	}).current

	const API = useMemo(() => ({ pushState, back, forward, reset }), [pushState, back, forward, reset])
	const state = historyStorage[cursor]
	const history = [state, API]
	console.log(historyStorage, cursor)

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
