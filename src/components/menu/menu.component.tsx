import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinik = styled(Link)`
	text-decoration: none;
	color: wheat;
`

export const Menu = () => (
	<div>
		<StyledLinik to="/">Home 🏡</StyledLinik>
		<StyledLinik to="/useShouldRender">useShouldRender</StyledLinik>
	</div>
)
