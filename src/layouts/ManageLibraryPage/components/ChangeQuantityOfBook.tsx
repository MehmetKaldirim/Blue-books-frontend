import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import { useOktaAuth } from "@okta/okta-react";

interface ChangeQuantityOfBookProps {
  book: BookModel;
  deleteBook: (id: number) => void;
}

export const ChangeQuantityOfBook: React.FC<ChangeQuantityOfBookProps> = ({
  book,
  deleteBook,
}) => {
  const { authState } = useOktaAuth();
  const [quantity, setQuantity] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    const fetchBookInState = () => {
      book.copies ? setQuantity(book.copies) : setQuantity(0);
      book.copiesAvailable
        ? setRemaining(book.copiesAvailable)
        : setRemaining(0);
    };
    fetchBookInState();
  }, []);

  async function increaseQuantity() {
    const url = `${process.env.REACT_APP_API}/admin/secure/increase/book/quantity?bookId=${book?.id}`;
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const quantityUpdateResponse = await fetch(url, requestOptions);
    if (!quantityUpdateResponse.ok) {
      throw new Error("Something went wrong!");
    }
    setQuantity(quantity + 1);
    setRemaining(remaining + 1);
  }

  async function decreaseQuantity() {
    const url = `${process.env.REACT_APP_API}/admin/secure/decrease/book/quantity?bookId=${book?.id}`;
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const quantityUpdateResponse = await fetch(url, requestOptions);
    if (!quantityUpdateResponse.ok) {
      throw new Error("Something went wrong!");
    }
    setQuantity(quantity - 1);
    setRemaining(remaining - 1);
  }

  async function fetchDeleteBook() {
    const url = `${process.env.REACT_APP_API}/admin/secure/delete/book?bookId=${book?.id}`;
    console.log("bu book id  " + book?.id);
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const updateResponse = await fetch(url, requestOptions);
    if (!updateResponse.ok) {
      throw new Error("Something went wrong!");
    }

    deleteBook(book.id);
  }

  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {book.img ? (
              <img src={book.img} width="123" height="196" alt="Book" />
            ) : (
              <img
                src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
                width="123"
                height="196"
                alt="Book"
              />
            )}
          </div>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            {book.img ? (
              <img src={book.img} width="123" height="196" alt="Book" />
            ) : (
              <img
                src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
                width="123"
                height="196"
                alt="Book"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{book.author}</h5>
            <h4>{book.title}</h4>
            <p className="card-text"> {book.description} </p>
          </div>
        </div>
        <div className="mt-3 col-md-4">
          <div className="d-flex justify-content-center algin-items-center">
            <p>
              Total Quantity: <b>{quantity}</b>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p>
              Books Remaining: <b>{remaining}</b>
            </p>
          </div>
        </div>
        <div className="mt-3 col-md-1">
          <div className="d-flex justify-content-start">
            <button
              className="m-1 btn btn-md btn-danger"
              onClick={fetchDeleteBook}
            >
              Delete
            </button>
          </div>
        </div>
        <button
          className="m1 btn btn-md main-color text-white"
          onClick={increaseQuantity}
        >
          Add Quantity
        </button>
        <button
          className="m1 btn btn-md btn-warning"
          onClick={decreaseQuantity}
        >
          Decrease Quantity
        </button>
      </div>
    </div>
  );
};
