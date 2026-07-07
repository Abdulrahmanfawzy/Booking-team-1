import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ChevronDown } from "lucide-react"
import { DropdownMenu } from "radix-ui"
import FilterBtn from "./toolbar/FilterBtn"
import { SortGroup } from "./Sidebar/SortGroup"
import { TypesGroup } from "./Sidebar/TypesGroup"
import { GenderGroup } from "./Sidebar/GenderGroup"
import { DateGroup } from "./Sidebar/DateGroup"

export function DoctorsSidebar() {
    return (
            <Sidebar className="ml-0">
                {/* <SidebarTrigger className="bg-red-500"></SidebarTrigger> */}
                <SidebarContent className="py-20 items-center px-6">
                    <SidebarGroup className="">
                        <DateGroup/>
                    </SidebarGroup>
                    <SidebarGroup className="">
                        <GenderGroup/>
                    </SidebarGroup>
                    <SidebarGroup className="">
                        <TypesGroup/>
                    </SidebarGroup>
                    <SidebarGroup className="">
                        <SortGroup/>
                    </SidebarGroup>
                    {/* <SidebarGroup className="bg-red-300">
                        <SortGroup/>
                    </SidebarGroup> */}
                </SidebarContent>
            </Sidebar>
    )
}