import RootNavbar from 'components/RootNavbar'
import { useEffect } from 'react'
import { redirect } from 'react-router'
import { getExistingUser, storeUserData } from '~/appwrite/auth'
import { account } from '~/appwrite/client'

export async function clientLoader() {
	try {
		const user = await account.get()

		if (!user.$id) return redirect('/sign-in')

		const existingUser = await getExistingUser(user.$id)
		return existingUser?.$id ? existingUser : await storeUserData()
	} catch (e) {
		console.log('Error fetching user', e)
		return redirect('/sign-in')
	}
}

const PageLayout = () => {
	useEffect(() => {
		document.title = 'Tourvisto'

		let link: HTMLLinkElement | null =
			document.querySelector("link[rel~='icon']")
		if (link) {
			link.href = '/assets/icons/favicon.ico'
		} else {
			const newLink = document.createElement('link')
			newLink.rel = 'icon'
			newLink.href = '/assets/icons/favicon.ico'
			document.head.appendChild(newLink)
		}
	}, [])
	return (
		<div className='bg-light-200'>
			<RootNavbar />
			{/* <Outlet /> */}
		</div>
	)
}
export default PageLayout
