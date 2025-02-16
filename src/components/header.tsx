import { fetchAuthors } from "@/services/authorService";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [authors, setAuthors] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string>(""); 

  const handleSearch = async () => {
    if (!searchQuery) {
      setError("Please enter a search term");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const authorsData = await fetchAuthors(); 
      const filteredAuthors = authorsData.filter(
        (author: any) =>
          author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          author.popular_book_title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
      setAuthors(filteredAuthors);
    } catch (err) {
      setError("Failed to fetch authors");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Online Library
        </h1>
      </div>
    </div>
  );
}
