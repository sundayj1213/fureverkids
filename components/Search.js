import { useCallback, useEffect, useState } from 'react'
import { getPosts } from '../utils/wordpress.js';

import SearchResult from "./post/SearchResult.js";


export default function Search({posts}) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([])

  const onChange = useCallback(async (event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      setActive(false)
      const {posts: results} = await getPosts({search: encodeURIComponent(query)});
      setActive(true)
      setResults(results)
    } else {
      setActive(true)
    }
  }, []);

  const onFocus = () => {
    setActive(true)
    window.addEventListener('click', onClick)
  }

  const onClick = useCallback((event) => {
    setQuery('')
    window.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    setResults(posts);
    setActive(true)
  }, [])

  return (
    <div className='bg-white p-4 text-secondary'>
      <div className="input-group mb-3 border-0 rounded">
        <input 
          type="text" 
          className="form-control bg-light border-0 py-3" 
          placeholder="Search articles here" 
          aria-label="Recipient's username" 
          aria-describedby="basic-addon2" 
          onChange={onChange}
          onFocus={onFocus}
          value={query}
        />
        <div className="input-group-append bg-light d-flex p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>  
      {
        active && results ? (
          results.length ? results.sort(() => Math.random() - 0.5).map(post => (
          <SearchResult post={post} key={post.id}/>
        )): <div>Nothing to show</div>): <div>Searching...</div>
      }
    </div>
  );
}
