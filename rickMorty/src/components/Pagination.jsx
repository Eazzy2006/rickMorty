
import React from 'react';

const Pagination = ({ page, setPage, info }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={!info.prev}>Previous</button>
      <button onClick={() => setPage(page + 1)} disabled={!info.next}>Next</button>
    </div>
  );
};

export default Pagination;
