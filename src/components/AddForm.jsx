import React from "react";

class AddForm extends React.Component {
  state = {
    bookName: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dataManager.addBook(this.state.bookName);
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      bookName: event.target.value
    });
  };

  render() {
    return (
      <form data-testid="formBooks" onSubmit={this.handleSubmit}>
        <label htmlFor="inputBook">Add a new Book</label>
        <input
          data-testid="inputBook"
          value={this.state.bookName}
          onChange={this.handleChange}
          type="text"
        />
        <button data-testid="formBtnBooks" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddForm;
