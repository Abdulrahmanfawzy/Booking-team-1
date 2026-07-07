import { Search } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export function SearchInput() {
    return (
        <InputGroup className="w-full h-9 border border-gray rounded-lg ">
        <InputGroupInput placeholder="Search doctors" />
        <InputGroupAddon>
            <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
    )
}
