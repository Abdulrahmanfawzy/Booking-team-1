import SearchInput from './SearchInput'
import logo from "@/assets/logo.svg"
import NavActions from './NavActions'
import { cn } from "@/lib/utils";
export default function Nav() {
  return (
    <header className={`sticky top-0 z-1000 bg-white/90 backdrop-blur-md border-b border-slate-100`}>
      <div className={cn('flex', 'justify-between', 'max-w-7xl', 'py-2', 'mx-auto', 'lg:px-20', 'sm:px-10', 'px-5')}>

        {/* Logo */}
        <img
          src={logo}
          alt="Cure Logo"
          className=""
        />

        {/* Search */}
        <div className={cn('w-[40%]', 'hidden', 'min-[420px]:block')}>
          <SearchInput />
        </div>
        <div>
            <NavActions/>
        </div>
      </div>
    </header>
  )
}
