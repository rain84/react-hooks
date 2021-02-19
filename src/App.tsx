import { Switch, Route, Link } from 'react-router-dom'
import { HeavyComponent } from 'components'
import styles from './App.module.css'

const App = () => (
	<div className={styles.app}>
		<header className={styles.header}>
			<p>React Hooks</p>
		</header>
		<main className={styles.main}>
			<aside className={styles.menu}>
				<Link to="/useShouldRender" className={styles.link}>
					useShouldRender
				</Link>
			</aside>
			<section className={styles.content}>
				<Switch>
					<Route path="/useShouldRender" component={HeavyComponent} />
					<Route path="/" />
				</Switch>
			</section>
		</main>
		<footer className={styles.footer} />
	</div>
)

export default App
