import { useRef } from 'react'

export const useCounter = (init = 0) => useRef(init)
