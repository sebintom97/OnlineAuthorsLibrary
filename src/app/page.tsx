"use client";
import React, { useEffect, useState } from "react";
import SearchComponent from "../components/searchComponent";
import AuthorsList from "../components/authorsList";
import Header from "@/components/header";
import { Author } from "@/models/authorsModal";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [authors, setAuthors] = useState<any[]>([]); 

    const sampleAuthors: Author[] = [
      {
        author_id: 1,
        name: "J.K. Rowling",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Harry Potter and the Sorcerer's Stone",
        popular_book_url: "#",
        number_published_books: 7,
      },
      {
        author_id: 2,
        name: "George R.R. Martin",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "A Game of Thrones",
        popular_book_url: "#",
        number_published_books: 5,
      },
      {
        author_id: 3,
        name: "J.R.R. Tolkien",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "The Lord of the Rings",
        popular_book_url: "#",
        number_published_books: 3,
      },
      {
        author_id: 4,
        name: "Agatha Christie",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Murder on the Orient Express",
        popular_book_url: "#",
        number_published_books: 66,
      },
      {
        author_id: 5,
        name: "Stephen King",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "The Shining",
        popular_book_url: "#",
        number_published_books: 63,
      },
      {
        author_id: 6,
        name: "Isaac Asimov",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Foundation",
        popular_book_url: "#",
        number_published_books: 40,
      },
      {
        author_id: 7,
        name: "Harper Lee",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "To Kill a Mockingbird",
        popular_book_url: "#",
        number_published_books: 1,
      },
      {
        author_id: 8,
        name: "Mark Twain",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Adventures of Huckleberry Finn",
        popular_book_url: "#",
        number_published_books: 28,
      },
      {
        author_id: 9,
        name: "F. Scott Fitzgerald",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "The Great Gatsby",
        popular_book_url: "#",
        number_published_books: 5,
      },
      {
        author_id: 10,
        name: "Virginia Woolf",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Mrs. Dalloway",
        popular_book_url: "#",
        number_published_books: 9,
      },
      {
        author_id: 11,
        name: "C.S. Lewis",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "The Chronicles of Narnia",
        popular_book_url: "#",
        number_published_books: 7,
      },
      {
        author_id: 12,
        name: "H.P. Lovecraft",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "The Call of Cthulhu",
        popular_book_url: "#",
        number_published_books: 28,
      },
      {
        author_id: 13,
        name: "J.D. Salinger",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "The Catcher in the Rye",
        popular_book_url: "#",
        number_published_books: 4,
      },
      {
        author_id: 14,
        name: "Ray Bradbury",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Fahrenheit 451",
        popular_book_url: "#",
        number_published_books: 27,
      },
      {
        author_id: 15,
        name: "Neil Gaiman",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "American Gods",
        popular_book_url: "#",
        number_published_books: 26,
      },
      {
        author_id: 16,
        name: "Kurt Vonnegut",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Slaughterhouse-Five",
        popular_book_url: "#",
        number_published_books: 14,
      },
      {
        author_id: 17,
        name: "Orson Scott Card",
        image: "/tiger.jpg",
        url: "#",
        popular_book_title: "Ender's Game",
        popular_book_url: "#",
        number_published_books: 25,
      },

    ];

    
    useEffect(() => {
      fetch("http://localhost:8089/app/library/top-authors")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: any[]) => {
          const formattedAuthors: Author[] = data.map((author) => ({
            author_id: author.author_id,
            name: author.name,
            image: author.image || "/default.jpg",
            url: author.url || "#",
            popular_book_title: author.popular_book_title || "Unknown",
            popular_book_url: author.popular_book_url || "#",
            number_published_books: author.number_published_books || 0,
          }));
          setAuthors(formattedAuthors);
        })
        .catch((error) => console.error("Error fetching authors:", error));
    }, []);


  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Header />
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <AuthorsList authors={sampleAuthors} searchQuery={searchQuery} />{" "}
    </div>
  );
}
