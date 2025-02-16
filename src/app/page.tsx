"use client";
import React, { useEffect, useState } from "react";
import SearchComponent from "../components/searchComponent";
import AuthorsList from "../components/authorsList";
import Header from "@/components/header";
import { Author } from "@/models/authorsModal";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [authors, setAuthors] = useState<any[]>([]);

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
      <AuthorsList authors={authors} searchQuery={searchQuery} />{" "}
    </div>
  );
}
