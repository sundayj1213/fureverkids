import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router'

export default function Pagination(props) {
  const router = useRouter();

  const paginationHandler = (page) => {
    const currentPath = '/';
    const currentQuery = props.query;
    currentQuery.page = page.selected ? page.selected + 1: 1;

    router.push({
        pathname: currentPath,
        query: currentQuery,
    });
  };

  return (
    <ReactPaginate
      previousLabel={(
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      )}
      nextLabel={(
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      )}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageClassName={'mx-4'}
      activeClassName={'active'}
      containerClassName={'text-muted pagination border-top w-100 bg-sm-white p-4 d-flex justify-content-between justify-content-lg-end align-items-center'}
      subContainerClassName={'pages pagination'}
      initialPage={props.currentPage - 1}
      pageCount={props.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={paginationHandler}
    />
  )
}

