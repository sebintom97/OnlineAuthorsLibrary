"use client";

import { useState, useEffect } from "react";
import { fetchAuthors } from "../services/authorService";

export const useAuthors = () => {
  const [authors, setAuthors] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getAuthors = async () => {
      setLoading(true);
      try {
        const data = await fetchAuthors();
        setAuthors(data);
      } catch (error) {
        setError("Failed to fetch authors");
      } finally {
        setLoading(false);
      }
    };

    getAuthors(); 
  }, []);

  return { authors, loading, error };
};
