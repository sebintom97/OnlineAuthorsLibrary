"use client";
import { useState } from "react";
import Image from "next/image";
import { AuthorsListProps } from "@/models/authorsModal";

const AuthorsList: React.FC<AuthorsListProps> = ({ authors, searchQuery }) => {
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [page, setPage] = useState(0);
  const authorsPerPage = 9;
  const [summary, setSummary] = useState<string | null>(null);

  const handleSummary = (title: string, author: string) => {
    fetch(`http://localhost:8089/summary?title=${title}&author=${author}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        setSummary(data);
        console.log("Book summary:", data);
      })
      .catch((error) => {
        console.error("Error fetching book summary:", error);
      });
  };

  const start = page * authorsPerPage;
  const end = start + authorsPerPage;
  const displayedAuthors = authors.slice(start, end);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4">
        {filteredAuthors.length > 0 ? (
          filteredAuthors.map((author) => (
            <div
              key={author.author_id}
              className=" card flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 gap-4"
            >
              <div>
                <Image
                  src={author.image}
                  alt="Book Image"
                  width={160}
                  height={160}
                  className="object-cover w-40 h-full"
                />
              </div>

              <div className="object-cover w-60 h-full flex flex-col justify-between">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {author.name}
                  </h5>
                  <h6 className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-400">
                    {author.popular_book_title}
                  </h6>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {/* {book.description} */}
                </p>
                <a
                  href="#"
                  onClick={() =>
                    handleSummary(author.popular_book_title, author.name)
                  }
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Generate Summary
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  ></svg>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No authors found
          </p>
        )}
      </div>
      <div className="flex justify-center gap-3 mt-6 ">
        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AuthorsList;
