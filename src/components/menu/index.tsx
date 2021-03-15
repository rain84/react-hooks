import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from 'routes'

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
		<StyledLink to={ROUTES.HOME}>Home 🏡</StyledLink>
		<StyledLink to={ROUTES.HOOK_USE_SHOULD_RENDER}>useShouldRender</StyledLink>
		<StyledLink to={ROUTES.HOOK_HEAVY_COMPONENT_SUSPENSE}>HeavyComponent with Suspence</StyledLink>
		<StyledLink to={ROUTES.HOOK_USE_STATE_WITH_PREV}>Use state with prevState</StyledLink>
		<StyledLink to={ROUTES.TEST_PAGE}>TestPage</StyledLink>
	</StyledSection>
)
