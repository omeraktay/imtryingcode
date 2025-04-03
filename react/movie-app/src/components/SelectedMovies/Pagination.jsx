export default function Pagination({nextPage, previousPage, currentPage, totalPages}){
    return(
      <nav className="mt-2">
        <ul className="pagination d-flex justify-content-between">
          <li className={currentPage != 1 ? "page-item" : "page-item disabled"}>
            <a href="#" className="page-link" onClick={previousPage}>Previous</a>
          </li>
          <li className={currentPage < totalPages ? "page-item" : "page-item disabled"}>
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    )
  }