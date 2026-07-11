import SearchInput from './SearchInput'
import logo from "@/assets/logo.svg"
import NavActions from './NavActions'
export default function Nav({padding}) {
  return (
    <header className={`${padding} sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100`}>
      <div className="flex justify-between max-w-7xl py-2 mx-auto">

        {/* Logo */}
        <img
          src={logo}
          alt="Cure Logo"
          className=""
        />

        {/* Search */}
        <div className="w-[40%] hidden min-[420px]:block">
          <SearchInput />
        </div>
        <div>
            <NavActions/>
        </div>
      </div>
    </header>
  )
}
