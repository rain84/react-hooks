import styled, { keyframes } from 'styled-components'

// This component is loaded dynamically
interface IProps {
	size?: string
	speed?: number
}

const defaultValues = {
	size: 5,
	speed: 2
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.i<IProps>`
	display: flex;
	animation: ${rotation} ${defaultValues.speed}s infinite linear;
	--size: ${(props) => props.size || defaultValues.size}rem;
	font-size: var(--size);
	width: var(--size);
	height: var(--size);

	text-align: center;
	justify-content: center;
	align-items: center;
	font-style: initial;
`
