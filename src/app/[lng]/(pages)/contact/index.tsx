/*"use client"
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

const ProductList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('page');
  console.log(search);
  const { data: initialData, isLoading, error } = useQuery(['products'], async () => {
    const response = await fetch('/assets/trailers/trailers.json');
    const data = await response.json();
    return data;
  });

  const [currentPage, setCurrentPage] = useState(search && search || 1);
  const [sortField, setSortField] = useState('height');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(initialData || []); // Dodano wartość początkową dla data

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`?page=${page}`, undefined, { shallow: true });
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (initialData) {
      const sortedData = [...initialData].sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return sortOrder === 'asc' ? -1 : 1;
        }
        if (a[sortField] > b[sortField]) {
          return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });

      const filteredData = sortedData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setData(filteredData);
    }
  }, [initialData, sortField, sortOrder, searchTerm]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred:</div>;
  }

  const productsPerPage = 5;
  const pageCount = Math.ceil(data.length / productsPerPage);

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentPageProducts = data.slice(start, end);

  return (
    <div>
      <div>
        <div>
          Sort by:
          <button onClick={() => handleSort('height')}>Height</button>
          <button onClick={() => handleSort('weight')}>Weight</button>
          <button onClick={() => handleSort('dmc')}>DMC</button>
          <button onClick={() => handleSort('area')}>Area</button>
        </div>
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      </div>
      {currentPageProducts.map((product) => (
        <div key={product.name}>
          <div>Name: {product.name}</div>
          <div>Height: {product.height}</div>
          <div>Weight: {product.weight}</div>
          <div>DMC: {product.dmc}</div>
          <div>Area: {product.area}</div>
        </div>
      ))}
      <ul>

        {Array.from({ length: pageCount }, (_, i) => (
          <li key={i}>
            <button onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


"use client"
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

const ProductList = () => {
    const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('page');
  console.log(search);
  const { data: initialData, isLoading, error } = useQuery(['products'], async () => {
    const response = await fetch('/assets/trailers/trailers.json');
    const data = await response.json();
    return data;
  });

  const [currentPage, setCurrentPage] = useState(search && search || 1);
  const [sortField, setSortField] = useState('height');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(initialData || []); // Dodano wartość początkową dla data

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const queryString = `?page=${page}`; // Zapisz numer strony w adresie URL
    router.push(queryString, undefined, { shallow: true });
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const queryString = `?page=1&search=${encodeURIComponent(value)}`; // Zapisz numer strony i frazę wyszukiwania w adresie URL
    router.push(queryString, undefined, { shallow: true });
  };

  useEffect(() => {
    if (initialData) {
      const sortedData = [...initialData].sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return sortOrder === 'asc' ? -1 : 1;
        }
        if (a[sortField] > b[sortField]) {
          return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });

      const filteredData = sortedData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setData(filteredData);
    }
  }, [initialData, sortField, sortOrder, searchTerm]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || '1';
    const search = params.get('search') || '';

    setSearchTerm(search);
    setCurrentPage(page);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred:</div>;
  }

  const productsPerPage = 5;
  const pageCount = Math.ceil(data.length / productsPerPage);

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentPageProducts = data.slice(start, end);

  return (
    <div>
      <div>
        <div>
          Sort by:
          <button onClick={() => handleSort('height')}>Height</button>
          <button onClick={() => handleSort('weight')}>Weight</button>
          <button onClick={() => handleSort('dmc')}>DMC</button>
          <button onClick={() => handleSort('area')}>Area</button>
        </div>
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      </div>
      {currentPageProducts.map((product) => (
        <div key={product.name}>
          <div>Name: {product.name}</div>
          <div>Height: {product.height}</div>
          <div>Weight: {product.weight}</div>
          <div>DMC: {product.dmc}</div>
          <div>Area: {product.area}</div>
        </div>
      ))}
      <ul>

        {Array.from({ length: pageCount }, (_, i) => (
          <li key={i}>
            <button onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


"use client"

import { useQuery } from "@tanstack/react-query";
import { MainLayout } from "../components/PageLayouts/MainLayout";
import styles from "./contact.module.scss";
import { useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Product {
  name: string;
  height: number;
  weight: number;
  dmc: number;
  area: number;
  [key: string]: any; 
}

export default function Home() {
  const router = useRouter();
  const {push} = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [newPage, setNewPage] = useState("1");
  const [sortProperty, setSortProperty] = useState('height'); // Właściwość do sortowania
  const [sortDirection, setSortDirection] = useState('asc'); // Kierunek sortowania

  const { data, isLoading, error } = useQuery<Product[]>(['products', searchParams, newPage], async () => {
    const response = await fetch('/assets/trailers/trailers.json');
    const data = await response.json();
    return data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

  // Sortowanie danych
  const sortedProducts = useMemo(() => {
    let sorted: Product[] = [];
    if (data) {
      sorted = [...data].sort((a, b) => {
        const propertyA = a[sortProperty];
        const propertyB = b[sortProperty];

        if (propertyA < propertyB) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (propertyA > propertyB) {
          return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sorted;
  }, [data, sortProperty, sortDirection]);

  // Wyszukiwanie danych
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get('search')?.toString();
    push(
      `${pathname}search=${searchQuery}page=${newPage}}},`
    );
  };

  // Filtruj dane na podstawie zapytania wyszukiwania
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchParams?.toString().toLowerCase()!)
  );

  // Podziel dane na strony z 5 produktami na każdej
  const productsPerPage = 5;
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  // Wyświetl produkty dla bieżącej strony
  const start = (parseInt(newPage?.toString()!) - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentPageProducts = filteredProducts.slice(start, end);

  // Aktualizuj numer strony w adresie URL
  const handlePageChange = (newPage: number) => {
    push(
      `${pathname}${newPage.toString()}}},`
    );
  };


  return (
    <MainLayout>
     <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue={searchParams?.toString()} />
        <button type="submit">Search</button>
      </form>
      <div>
        <label>
          Sort by:
          <select
            value={sortProperty}
            onChange={(e) => setSortProperty(e.target.value)}
          >
            <option value="height">Height</option>
            <option value="weight">Weight</option>
            <option value="dmc">DMC</option>
            <option value="area">Area</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label>
          Sort direction:
          <select
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      {currentPageProducts.map((product) => (
        <div key={product.name}>
          <div>Name: {product.name}</div>
          <div>Height: {product.height}</div>
          <div>Weight: {product.weight}</div>
          <div>DMC: {product.dmc}</div>
          <div>Area: {product.area}</div>
        </div>
      ))}
      <ul>

        {Array.from({ length: pageCount }, (_, i) => (
          <li key={i}>
            <button onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
    </MainLayout>
  );
}
*/

/*DragDROP


 const [filesArray, setFilesArray] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const labelRef = useRef(null);
 /*
  const labelRef = useRef(null);

  const onDragOver = () => labelRef.current.classList.add("dragover");
  const onDragLeave = () => labelRef.current.classList.remove("dragover");
  const onDrop = (e) => {
    e.preventDefault();
    labelRef.current.classList.remove("dragover");
    const items = e.dataTransfer.items;
  const filesArray = [];
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i].webkitGetAsEntry();
    if (item.isFile) {
      const file = items[i].getAsFile();
      filesArray.push(file);
    }
  }
  
  setFilesArray(filesArray);
  };

RETURN
  <label >Dodaj pliki          </label>
          <div
            className={styles.container}
            ref={labelRef}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className={styles.boxwrapper}>
              Wybierz pliki lub przeciągnij i upuść je tutaj
              
              <input
                className={styles.input}
                type="file"
                id="input"
                multiple={true}
                title={
                  filesArray.length
                    ? "Załadowano plik/i"
                    : "Nie wybrano pliku/ów"
                }
                onChange={handleInputChange}
              />
            </div>
          </div>

STYLES: 

@use "../../../styles/themes.scss" as themes;
@use "../../../styles/button.scss" as button;

.wrapper {
  width: 80%;
  max-width: 500px;
  margin: 50px auto;
}

.submit {
  &__container {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__button {
    @include button.button;
    margin: 50px;
  }

  &__error {
    color: themes.$crimson;
    font-size: 16px;
    position: absolute;
    top: 10px;
    white-space: nowrap;

    @include themes.small {
      font-size: 14px;
    }

    @include themes.superSmall {
      font-size: 14px;
    }
  }
}


.container{
  position: relative;
  width: 100%;
  display: flex;
  cursor: pointer;
  background-color: themes.$white;
  border: 1px solid themes.$alto;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  &:hover {
    background-color: themes.$alto;
  }

  &.dragover {
    background-color: themes.$alto;
  }

}

.input{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &::-webkit-file-upload-button {
    cursor: pointer;
  }
}

.boxwrapper{
  font-size: 14px;
  opacity: 0.8;
}

.close{
  width:15px;
  height:15px;
  border: none;
  opacity: 0.5;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
}


*/

