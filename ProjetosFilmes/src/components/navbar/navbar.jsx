import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaCameraRetro } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [search, setSeach] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSeach("");
  };

  return (
    <div>
      <nav id="navbar">
        <h2 className="logo">
          <Link to="/" className="link">
            <i>
              <FaCameraRetro />
            </i>
            MoviesLib
          </Link>
        </h2>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSeach(e.target.value)}
            value={search}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
