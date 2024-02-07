import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setquery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search Order #"
        onChange={(e) => setquery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all
        duration-300 placeholder:text-stone-400 sm:focus:w-72 focus:outline-none
        focus:ring focus:ring-yellow-500 sm:w-64 focus:ring-offset-2 focus:ring-opacity-50
        "
      />
    </form>
  );
}

export default SearchOrder;
