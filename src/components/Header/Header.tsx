import { ModeToggle } from './ModeToggle'
import { UserProfile } from './UserProfile'
import {
  SidebarTrigger
} from "@/components/ui/sidebar"

const Header = () => {
  return (
    <div className='w-full bg-white p-2.5 flex items-center justify-between shadow-sm'>

      {/* Sidebar Trigger */}
      <SidebarTrigger className="p-2 bg-gray-200 rounded-md">
        Menu
      </SidebarTrigger>

      {/* Right controls */}
      <div className='flex items-center gap-4'>
        <ModeToggle />
        <UserProfile />
      </div>
    </div>
  )
}


export default Header