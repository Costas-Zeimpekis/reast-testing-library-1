import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddForm from "./addForm";
import DataManger from "./DataManager";

describe("<AddForm/>", () => {
  let component;
  let dataManager = new DataManger();

  beforeEach(() => {
    component = render(<AddForm dataManager={dataManager} />);
  });

  test("user can enter a nook name", () => {
    const input = component.getByTestId("inputBook");
    fireEvent.change(input, {
      target: {
        value: "New Book"
      }
    });

    expect(input.value).toBe("New Book");
  });

  test("user can add new book to localStorage", () => {
    const input = component.getByTestId("inputBook");
    const btn = component.getByTestId("formBtnBooks");
    fireEvent.change(input, {
      target: {
        value: "Alchemist2"
      }
    });

    fireEvent.click(btn);

    const books = dataManager.getBooks();
    expect(books.length).toBe(1);
  });
});
