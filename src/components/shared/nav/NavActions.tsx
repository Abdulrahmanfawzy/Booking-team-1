import Menu from "./Menu"
import Notfication from "./Notfication"
import ProfileAtNav from "./ProfileAtNav"
export default function NavActions() {
 return (
    <div className="flex items-center gap-4">
      {/* Menu Button */}
      <Menu/>
      <Notfication/>
      {/* User Avatar */}
      <ProfileAtNav/>
    </div>
  );
};

