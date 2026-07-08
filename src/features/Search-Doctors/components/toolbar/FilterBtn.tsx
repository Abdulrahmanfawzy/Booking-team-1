import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Settings2 } from 'lucide-react'
import React from 'react'

function FilterBtn({open, setOpen}:{open:boolean, setOpen: (open:boolean)=>void}) {
    return (
        <button className={`border border-gray text-gray h-9 flex gap-3 justify-between rounded-lg px-1 transition-all duration-300 ${open? "pl-4":""}`} onClick={()=>setOpen(!open)}>
                
                <span className='flex items-center gap-1 px-2'><Settings2 className='h-4' /> filter</span>
                {open?<ChevronRight className='border-l h-full'/> : <ChevronLeft className='border-l h-full '/>}
                
        </button>
    )
}

export default FilterBtn
