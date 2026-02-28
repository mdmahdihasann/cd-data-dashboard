"use client"

import Link from "next/link"
import { FaChartPie } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";;
import { FaUser } from "react-icons/fa";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <div className="px-2.5 mb-2">
                            <h3 className="text-3xl font-extrabold tracking-tight font-serif">
                                <span className="text-blue">Data</span>
                                <span className="text-black dark:text-white">Soft</span>
                                <span className="text-red-600">.</span>
                            </h3>
                        </div>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                                >
                                    <FaChartPie size={18}/>
                                    Data
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href="/dashboard/profile"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                                >
                                    <FaUser size={18} />
                                    Profile
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                                >
                                    <IoMdSettings size={18} />
                                    Settings
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}