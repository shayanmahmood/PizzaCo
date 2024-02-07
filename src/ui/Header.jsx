import { Link } from "react-router-dom";
import SearchOrder from "../Features/Order/SearchOrder";
import UserName from "../Features/User/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        FAST PIZZA CO.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
