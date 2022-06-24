import { getDate } from "../../utils/utils";


export default function PostExtras({post}) {
  return (
    <div className="d-flex justify-content-between">
        <div className="text-muted d-flex align-items-center justify-content-center">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted">
                    <path d="M17.3857 18.3333H4.76292C3.64246 18.3333 2.73035 17.4971 2.73035 16.47V4.89909C2.73035 3.872 3.6425 3.03577 4.76292 3.03577H17.3857C18.5079 3.03577 19.4185 3.87204 19.4185 4.89909V16.47C19.42 17.4985 18.5079 18.3333 17.3857 18.3333ZM4.76292 3.79727C4.10031 3.79727 3.56072 4.2918 3.56072 4.89915V16.4701C3.56072 17.0775 4.10031 17.5718 4.76292 17.5718H17.3857C18.0484 17.5718 18.5892 17.0774 18.5892 16.4701V4.89915C18.5892 4.29176 18.05 3.79727 17.3857 3.79727H4.76292Z" fill="#333333" stroke="#333333" strokeWidth="0.5"/>
                    <path d="M7.54413 5.01539C7.31442 5.01539 7.12964 4.84445 7.12964 4.6353V2.047C7.12964 1.83643 7.31612 1.66705 7.54413 1.66705C7.77227 1.66705 7.96045 1.83799 7.96045 2.047V4.6353C7.95873 4.84443 7.77226 5.01539 7.54413 5.01539Z" fill="#333333" stroke="#333333" strokeWidth="0.5"/>
                    <path d="M14.5402 5.01502C14.3104 5.01502 14.124 4.84408 14.124 4.63507V2.04677C14.124 1.8362 14.3104 1.66669 14.5402 1.66669C14.7699 1.66669 14.9547 1.83763 14.9547 2.04677V4.63507C14.9564 4.84407 14.77 5.01502 14.5402 5.01502Z" fill="#333333" stroke="#333333" strokeWidth="0.5"/>
                    <path d="M19.0029 7.33767H3.1435C2.91379 7.33767 2.72729 7.16673 2.72729 6.95772C2.72729 6.74859 2.91378 6.57764 3.1435 6.57764H19.0029C19.2326 6.57764 19.4191 6.74858 19.4191 6.95772C19.4191 7.16672 19.2326 7.33767 19.0029 7.33767Z" fill="#333333" stroke="#333333" strokeWidth="0.5"/>
                </svg>
            <div style={{marginLeft: '6px'}}>
                {getDate(post.modified)}
            </div>
        </div>
        <div className="text-muted d-flex align-items-center justify-content-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1914 8.22266C10.7402 8.22266 10.3906 8.57227 10.3906 9.00391C10.3906 9.43555 10.7402 9.78516 11.1914 9.78516C11.6035 9.78516 11.9531 9.43555 11.9531 9.00391C11.9531 8.57227 11.6035 8.22266 11.1914 8.22266ZM5.72266 8.22266C5.27148 8.22266 4.92188 8.57227 4.92188 9.00391C4.92188 9.43555 5.27148 9.78516 5.72266 9.78516C6.13477 9.78516 6.48438 9.43555 6.48438 9.00391C6.48438 8.57227 6.13477 8.22266 5.72266 8.22266Z" fill="#333333"/>
                <path d="M17.4609 6.7383C16.5215 5.44924 15.209 4.58791 13.7695 4.19924V4.20119C13.4355 3.8301 13.0586 3.4883 12.6367 3.18361C9.43944 0.859394 4.95115 1.56838 2.61717 4.76564C0.736312 7.3633 0.81639 10.8574 2.73436 13.3399L2.74998 15.9297C2.74998 15.9922 2.75975 16.0547 2.77928 16.1133C2.8828 16.4434 3.23436 16.625 3.56248 16.5215L6.03514 15.7422C6.68944 15.9746 7.36522 16.1074 8.03709 16.1446L8.02733 16.1524C9.76756 17.4199 12.0488 17.8008 14.1406 17.1094L16.623 17.918C16.6855 17.9375 16.75 17.9492 16.8164 17.9492C17.1621 17.9492 17.4414 17.6699 17.4414 17.3242V14.7071C19.1621 12.3711 19.207 9.1426 17.4609 6.7383ZM6.30858 14.3555L6.0742 14.2578L4.14061 14.8633L4.12108 12.8321L3.96483 12.6563C2.31248 10.6406 2.20311 7.73635 3.74998 5.60549C5.6328 3.02346 9.24217 2.45314 11.8164 4.31643C14.3984 6.19338 14.9707 9.79689 13.1055 12.3633C11.541 14.5098 8.74022 15.3028 6.30858 14.3555ZM16.1719 14.0235L16.0156 14.2188L16.0351 16.25L14.1211 15.6055L13.8867 15.7031C12.793 16.1094 11.6269 16.1426 10.5469 15.8399L10.543 15.8379C11.9863 15.3946 13.2949 14.4961 14.2383 13.2031C15.7305 11.1465 15.9726 8.56252 15.1055 6.35939L15.1172 6.36721C15.5664 6.68947 15.9785 7.09182 16.3281 7.57814C17.7461 9.52346 17.666 12.1719 16.1719 14.0235Z" fill="#333333"/>
                <path d="M8.45703 8.22266C8.00586 8.22266 7.65625 8.57227 7.65625 9.00391C7.65625 9.43555 8.00586 9.78516 8.45703 9.78516C8.86914 9.78516 9.21875 9.43555 9.21875 9.00391C9.21875 8.57227 8.86914 8.22266 8.45703 8.22266Z" fill="#333333"/>
            </svg>
            <div style={{marginLeft: '6px'}}>
            {(Math.floor(Math.random() * 100) + 1)} <span> Comments</span>
            </div>
        </div>
    </div>
  )
}