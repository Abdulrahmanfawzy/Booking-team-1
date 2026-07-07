import SearchInput from './SearchInput'
import logo from "@/assets/logo.svg"
import NavActions from './NavActions'
export default function Nav() {
  return (
    <header className="">
      <div className="flex justify-between mx-5 py-2 ">

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
