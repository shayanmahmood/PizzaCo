import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  console.log(userName);
  if (!userName) return null;
  return <p className="hidden md:block">{userName}</p>;
}

export default UserName;
