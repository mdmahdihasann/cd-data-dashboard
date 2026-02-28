import Link from 'next/link'

const SideMenu = () => {
    return (
        <div>
            <Link href="/dashboard/data">Data</Link>
            <Link href="/dashboard/Profile">Profile</Link>
            <Link href="/dashboard/settings">Settings</Link>
        </div>
    )
}

export default SideMenu