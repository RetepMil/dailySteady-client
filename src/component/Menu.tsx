import { ReactComponent as MenuIcon } from "../static/icon/MenuIcon.svg";
import { ReactComponent as UserIcon } from "../static/icon/UserIcon.svg";

function Menu() {
  return (
    <div className="flex justify-between mb-4">
      <MenuIcon className="w-8 h-8" />
      <span className="text-menu-theme-color text-xl subpixel-antialiased">
        <strong>Daily, Steady</strong>
      </span>
      <UserIcon className="w-8 h-8" />
    </div>
  );
}

export default Menu;
