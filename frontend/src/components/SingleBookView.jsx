function SingleBookView({bookName,auther, price, deleteFunc}) {
  return (
    <div className="bg-white  min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        <div className="h-64 md:h-auto">
          <img
            src="https://www.collegenp.com/uploads/2023/11/Rich-Dad-Poor-Dad.jpeg"
            alt="Books"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-white mb-2">
              {bookName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              No dynamic for now. It's just a testing some basic of my react.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {auther}
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {price}
              </h3>
            </div>
          </div>
          {/* Footer CTA */}
          <div className="mt-6 text-right">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition" onClick={deleteFunc}>
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookView
