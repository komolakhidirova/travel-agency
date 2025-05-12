import { Header } from 'components'

const Dashboard = () => {
	const user = {
		name: 'Adrian',
		email: 'contact@jsmastery.pro',
		imageUrl: '/assets/images/david.webp',
	}

	return (
		<main className='dashboard wrapper'>
			<Header
				title={`Welcome ${user?.name ?? 'Guest'} 👋`}
				description='Track activity, trends and popular destinations in real time'
			/>
		</main>
	)
}
export default Dashboard
