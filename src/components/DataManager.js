class DataManager {
  getBooks = () => {
    return JSON.parse(localStorage.getItem("books")) || [];
  };

  addBook = name => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ name });

    localStorage.setItem("books", JSON.stringify(books));
  };
}

export default DataManager;
