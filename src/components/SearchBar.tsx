function SearchBar() {
  return (
    
      <form className="d-flex  w-50" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Rechercher par recette, par ingrédient "
          aria-label="Search"
          style={{ textAlign: "center" }}
        />
        <button
          className="btn btn-outline-success justify-content-center"
          type="submit"
        >
          Rechercher
        </button>
      </form>
    
  );
}
export default SearchBar;
