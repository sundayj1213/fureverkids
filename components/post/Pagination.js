import {useRouter} from 'next/router';

import ReactPaginate from 'react-paginate';

export default function Pagination(props) {
  const router = useRouter();

  if(!props.pageCount) return <></>;

  const paginationHandler = (page) => {

    if(isNaN(page.selected)) return;

    if(page.selected + 1 != props.page) {
      const _page = (page.selected ? parseInt(page.selected, 10) + 1: 1);
       
      if(!/^\d+$/.test(router.query.category??'1')) {
        router.push({
          pathname: `/${router.query.category}/${_page}`
        })
      } else {
        router.push({
          pathname: `${_page}`
        })
      }
    }
  };

  return (
    props.pageCount && <ReactPaginate
      previousLabel={(
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      )}
      nextLabel={(
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      )}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageClassName={'mx-4'}
      activeClassName={'active'}
      containerClassName={'text-muted pagination w-100 bg-sm-white p-4 d-flex justify-content-between justify-content-lg-end align-items-center'}
      subContainerClassName={'pages pagination'}
      initialPage={parseInt(props.page, 10) -1}
      pageCount={props.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={paginationHandler}
    />
  )
}

