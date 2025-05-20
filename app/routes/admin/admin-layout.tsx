import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { MobileSidebar, NavItems } from 'components'
import { useEffect } from 'react'
import { Outlet, redirect } from 'react-router'
import { getExistingUser, storeUserData } from '~/appwrite/auth'
import { account } from '~/appwrite/client'

export async function clientLoader() {
	try {
		const user = await account.get()

		if (!user.$id) return redirect('/sign-in')

		const existingUser = await getExistingUser(user.$id)
		if (existingUser?.status === 'user') {
			return redirect('/')
		}

		return existingUser?.$id ? existingUser : await storeUserData()
	} catch (e) {
		console.log('Error in clientLoader', e)
		return redirect('/sign-in')
	}
}

const AdminLayout = () => {
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
		<div className='admin-layout'>
			<MobileSidebar />

			<aside className='w-full max-w-[270px] hidden lg:block'>
				<SidebarComponent width={270} enableGestures={false}>
					<NavItems />
				</SidebarComponent>
			</aside>

			<aside className='children'>
				<Outlet />
			</aside>
		</div>
	)
}

export default AdminLayout
