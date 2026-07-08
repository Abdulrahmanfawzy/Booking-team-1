import React from 'react'
import { DateGroup } from './Sidebar/DateGroup'
import { SortGroup } from './Sidebar/SortGroup'
import { TypesGroup } from './Sidebar/TypesGroup'
import { GenderGroup } from './Sidebar/GenderGroup'

function Filters({open}:{open:boolean}) {
    return (
        <div className={`transition-all duration-300 flex flex-col gap-5 max-md:grid max-md:grid-cols-2 max-md:mb-3 max-md:mx-5 overflow-hidden ${open?"md:w-52 opacity-100":" md:w-0 md:opacity-0"}`}>
            <DateGroup />
            <GenderGroup/>
            <TypesGroup/>
            <SortGroup/>
        </div>
    )
}

export default Filters
