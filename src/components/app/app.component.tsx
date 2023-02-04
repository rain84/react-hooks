import { Routes, Route } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { HeavyComponent, HeavyComponentLazy, Menu, CounterWithPrevState} from 'components'
import { ROUTES } from 'routes'

const StyledApp = styled.section`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	font-size: calc(10px + 2vmin);
	color: white;
	padding: 0 5vw 0;
`
const borders = css`
	border: 1px solid white;
`
const Header = styled.header`
	min-height: 10vh;
	text-align: center;
	${borders}
`

const Main = styled.main`
	flex-grow: 1;
	display: flex;
	${borders}
`

const Sidepanel = styled.aside`
	max-width: 30vw;
	padding: 1vh;
	${borders}
`

const Content = styled.header`
	padding-left: 10vw;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	${borders}
`

const Footer = styled.header`
	min-height: 10vh;
	${borders}
`

export const App = () => (
	<StyledApp>
		<Header>
			<p>React Hooks</p>
		</Header>
		<Main>
			<Sidepanel>
				<Menu />
			</Sidepanel>
			<Content>
				<Routes>
					<Route path={ROUTES.HOOK_USE_SHOULD_RENDER} element={<HeavyComponent/>} />
					<Route path={ROUTES.HOOK_HEAVY_COMPONENT_SUSPENSE} element={<HeavyComponentLazy/>} />
					<Route path={ROUTES.HOOK_USE_STATE_WITH_PREV} element={<CounterWithPrevState/>} />
					<Route path="/" element={<p>Collection of React-Hooks 🪝</p>} />
				</Routes>
			</Content>
		</Main>
		<Footer />
	</StyledApp>
)
