import { Search } from 'lucide-react'
export default function SearchInput() {
  return (
    <div className='mt-2'>
        <div className="relative w-full max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

    <input
        type="text"
        placeholder="Search about specialty, doctor"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none focus:border-blue-500 text-xs"
    />
</div>
    </div>
  )
}
