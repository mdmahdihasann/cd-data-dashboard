import { ModeToggle } from './ModeToggle'
import { UserProfile } from './UserProfile'
import {
  SidebarTrigger
} from "@/components/ui/sidebar"

const Header = () => {
  return (
    <div className='w-full bg-white p-2.5 flex items-center justify-between sticky top-0 left-0 z-50'>

      {/* Sidebar Trigger */}
      <SidebarTrigger className="p-2 bg-gray-300 rounded-md text-gray-600">
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