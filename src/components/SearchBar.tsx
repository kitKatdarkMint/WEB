function SearchBar() {
  return (
    
      <form className="mb-3 flex flex-col items-center justify-center h-screen text-center" role="search">
        <input
          className="flex flex-col gap-4"
          type="search"
          placeholder="Rechercher par nom, adresse, type "
          aria-label="Search"
          style={{ textAlign: "center", width: "70%", padding: "8px", border: "1.5px solid #999", borderRadius: "20px", marginRight: "10px" }}
        />
        <button
          className="btn btn-outline-danger justify-content-center"
          type="submit"
        >
          Rechercher
        </button>
      </form>
    
  );
}
export default SearchBar;
