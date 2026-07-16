import { MapPinned } from "lucide-react"

function MapBtn({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    return (
        <button className='border border-gray text-gray h-9 flex gap-1 items-center rounded-lg px-3' onClick={() => setOpen(!open)}>
            <MapPinned className="h-4"/> Map
        </button>
    )
}

export default MapBtn
