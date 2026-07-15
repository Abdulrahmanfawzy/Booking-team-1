import { Search } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { searchData } from '@/features/Home Page/Services/homeApi';
export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchData(searchTerm.trim()).then((response) => {
        console.log(response.data);
        localStorage.getItem("token")
      }).catch((error) => {
        console.error(error);
      });
    }
  }
  return (
    <div className='mt-2'>
        <div className={cn('relative', 'w-full', 'max-w-xl')}>
        <Search className={cn('absolute', 'left-4', 'top-1/2', '-translate-y-1/2', 'text-gray-400')} />

    <input
        type="text"
        placeholder="Search about specialty, doctor"
        className={cn('w-full', 'rounded-xl', 'border', 'border-gray-200', 'bg-gray-50', 'py-3', 'pl-12', 'pr-4', 'outline-none', 'focus:border-blue-500', 'text-xs')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
    />
</div>
    </div>
  )
}
