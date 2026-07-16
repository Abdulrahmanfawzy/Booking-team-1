import { Search } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

interface IProps {
numberOfResults: number, 
keyword?: string, 
setKeyword?: (keyword: string) => void
}

export function SearchInput({numberOfResults, keyword, setKeyword}: IProps) {
    return (
        <InputGroup className="w-full h-9 border border-gray rounded-lg bg-white">
        <InputGroupInput placeholder="Search doctors" value={keyword} onChange={(e)=> setKeyword && setKeyword(e.target.value)}/>
        <InputGroupAddon>
            <Search/>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">{numberOfResults} results</InputGroupAddon>
        </InputGroup>
    )
}
