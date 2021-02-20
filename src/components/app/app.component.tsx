import { Switch, Route } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { HeavyComponent, HeavyComponentLazy, Menu } from 'components'

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
				<Switch>
					<Route path="/useShouldRender" component={HeavyComponent} />
					<Route path="/heavyComponentSuspense" component={HeavyComponentLazy} />
					<Route path="/" />
				</Switch>
			</Content>
		</Main>
		<Footer />
	</StyledApp>
)
