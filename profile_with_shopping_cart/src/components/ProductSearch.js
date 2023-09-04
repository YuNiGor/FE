import React, { useState, useEffect } from 'react';

function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      setIsFetching(true);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?q=${searchQuery}`
        );

        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="product-search">
      <h2>Поиск товаров</h2>
      <input
        type="text"
        placeholder="Введите запрос"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {isFetching && <p>Идет поиск...</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            {result.title}
            <button>+</button>
            <button>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
