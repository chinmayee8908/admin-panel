import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { authorListData, booksListData, categoryListDat } from '../data';

export interface Category {
  cid: string,
  category_name: string,
  total_books: string
}

export interface Book {
  id: string,
  cat_id: string,
  aid: string,
  book_title: string,
  book_description: string,
  book_cover_img:string,
  book_bg_img: string,
  book_file_type: string,
  total_rate: string,
  rate_avg: string,
  book_views: string,
  author_id: string,
  author_name: string,
  cid: string,
  category_name: string
}

export interface Author {
  author_id: string,
  author_name: string,
  author_image:string
}

interface AppContextData {
  categoryList: Category[],
  bookList:Book[],
  authorList:Author[]
  handleCategoryList: (cat_list: Category[]) => void,
  handleBookList:(book_list:Book[]) => void,
  handleAuthorList:(author_list:Author[]) => void,
}

const AppContext = createContext<AppContextData>({
  categoryList: [],
  bookList:[],
  authorList:[],
  handleCategoryList: (cat_list: Category[]) => {},
  handleBookList: (book_list: Book[]) => {},
  handleAuthorList:(author_list: Author[]) => {}
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [categoryList, setCategoryList] = useState<Category[]>(categoryListDat);
  const [bookList, setBookList] = useState<Book[]>(booksListData);
  const [authorList, setAuthorList] = useState<Author[]>(authorListData);

  // console.log(categoryList)

  const handleCategoryList = (cat_list: Category[]) => {
    setCategoryList(cat_list)
  }

  const handleAuthorList = (author_list: Author[]) => {
    setAuthorList(author_list)
  }

  const handleBookList = (book_list: Book[]) => {
    setBookList(book_list)
  }

  const contextValue: AppContextData = {
    categoryList,
    bookList,
    authorList,
    handleCategoryList,
    handleBookList,
    handleAuthorList
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContext;
