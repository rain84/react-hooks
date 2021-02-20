import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
	text-decoration: none;
	color: wheat;

	&:hover {
		color: red;
	}
`

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-content: flex-start;

	& > * {
		padding-bottom: 1rem;
	}
	& > :last-child {
		padding-bottom: initial;
	}
`

export const Menu = () => (
	<StyledSection>
		<StyledLink to="/">Home 🏡</StyledLink>
		<StyledLink to="/useShouldRender">useShouldRender</StyledLink>
		<StyledLink to="/heavyComponentSuspense">HeavyComponent with Suspence</StyledLink>
	</StyledSection>
)
