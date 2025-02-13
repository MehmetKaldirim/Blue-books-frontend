import { useState, useEffect } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {
  const [rating, setRating] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");

  useEffect(() => {
    console.log("Updated rating:", rating);
  }, [rating]);

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <h5
        className="dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        Leave a review?
      </h5>
      <ul
        id="submitReviewRating"
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
          <li key={value}>
            <button
              onClick={() => {
                setRating(value);
                setDisplayInput(true);
              }}
              className="dropdown-item"
            >
              {value} star
            </button>
          </li>
        ))}
      </ul>
      <StarsReview rating={rating} size={32} key={rating} />

      {displayInput && (
        <form method="POST" action="#">
          <hr />

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="submitReviewDescription"
              placeholder="Optional"
              rows={3}
              onChange={(e) => setReviewDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              onClick={() => props.submitReview(rating, reviewDescription)}
              className="btn btn-primary mt-3"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
