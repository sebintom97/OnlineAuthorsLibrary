// services/authorService.ts

const API_URL = "http://localhost:8089/app/library/top-authors";

// Function to fetch authors
export const fetchAuthors = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the authors data
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw new Error("Failed to fetch authors");
  }
};

// Function to fetch summary
export const fetchSummary = async (title: string, author: string): Promise<string> => {
  try {
    const response = await fetch(`http://localhost:8089/summary?title=${title}&author=${author}`);
    if (!response.ok) {
      throw new Error("Failed to fetch summary");
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching summary:", error);
    return "";
  }
};
