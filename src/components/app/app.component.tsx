import { Switch, Route } from 'react-router-dom'
import { HeavyComponent, Menu } from 'components'
import styles from './app.module.css'

export const App = () => (
	<div className={styles.app}>
		<header className={styles.header}>
			<p>React Hooks</p>
		</header>
		<main className={styles.main}>
			<aside>
				<Menu />
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
