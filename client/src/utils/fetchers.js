export const booksFetcher = async (query) => {
  const res = await fetch(`http://localhost:5000/api/books/${query}`);
  const books = await res.json();

  return books;
};