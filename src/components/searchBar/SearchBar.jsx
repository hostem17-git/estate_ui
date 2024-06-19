import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleChange = (event) => {
    setQuery((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(query);
  };

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />

        <Link
          to={`/list?${JSON.stringify(query)
            .replace("{", "")
            .replaceAll('"', "")
            .replaceAll(",", "&")
            .replace("}", "")
            .replaceAll(":", "=")}`}
        >
          <button
            onClick={(e) => {
              console.log(
                JSON.stringify(query)
                  .replace("{", "")
                  .replaceAll('"', "")
                  .replaceAll(",", "&")
                  .replace("}", "")
                  .replaceAll(":", "=")
              );
            }}
          >
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
