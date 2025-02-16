export interface Author {
    author_id: number;
    name: string;
    image: string;
    url: string;
    popular_book_title: string;
    popular_book_url: string;
    number_published_books: number;
  }
  

  export interface AuthorsListProps {
    authors: Author[];
    searchQuery: string;
  }