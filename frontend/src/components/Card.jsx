
import { Link } from "react-router-dom";

function Card({book}) {

  return (
    <Link to={`/single-page/${book.id}`}>
      <div
        className="m-5 p-4 max-w-80 bg-indigo-200 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
        <img
          src="https://www.collegenp.com/uploads/2023/11/Rich-Dad-Poor-Dad.jpeg"
          className="shadow rounded-lg overflow-hidden border"
        />
        <div className="mt-4">
          <h4 className="font-bold text-xl">{book.bookName}</h4>
          <p className="mt-2 text-gray-600">
            {book.bookAuther}
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              {book.bookPrice}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
