import "./Pagination.scss";

export const Pagination = ({
  paginationCount,
  activePage,
  handlePageChange,
}) => {
  return (
    <div className="d-flex pagination">
      {Array(paginationCount)
        .fill("")
        .map((val, index) => {
          const page = index + 1;
          return (
            <div
              key={page}
              className={`d-flex  ${
                page > activePage ? "in-active-pagination" : "active-pagination"
              }`}
            >
              {page !== 1 && <div className="pagination-connector"></div>}
              <div
                className="pagination-indicator d-flex"
                onClick={(e) => {
                  handlePageChange(e,page);
                }}
              >
                {page}
              </div>
              {page !== paginationCount && (
                <div className="pagination-connector"></div>
              )}
            </div>
          );
        })}
    </div>
  );
};
