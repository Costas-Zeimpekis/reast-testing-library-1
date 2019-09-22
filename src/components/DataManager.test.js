import DataManager from "./DataManager";

describe("<Datamanger />", () => {
  let dataManager;

  beforeEach(() => {
    dataManager = new DataManager();
  });

  test("Datamanger gets books", () => {
    const books = dataManager.getBooks();

    expect(books.length).toBe(0);
  });

  test("Datamanager adds new books", () => {
    dataManager.addBook("Alchemist");
    const books = dataManager.getBooks();

    expect(books.length).toBe(1);
    expect(books[0].name).toBe("Alchemist");
  });
});
