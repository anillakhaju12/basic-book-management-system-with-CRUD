import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function EditPage(){
  const {id} = useParams()
  const navigate = useNavigate()
  const [book, setbook] = useState({})
  const[editBook, setEditBook] = useState({
    bookName : book.bookName,
    auther : book.bookAuther,
    price : book.bookPrice
  })

  async function getSingleBook(){
    const response = await axios.get("http://localhost:5000/api/books/" + id)
    if(response.status === 200){
      setbook(response.data.singleBook)
    }
  }
  useEffect(()=>{
    getSingleBook()
  },[])

  function handleChange(event){
    const {name, value} = event.target
    setEditBook({
      ...EditPage,
      [name] : value
    })
  }

  async function updateBook(event){
    event.preventDefault()
    const response = await axios.patch(`http://localhost:5000/api/books/${id}`, editBook)
    if(response.status === 200){
      alert('book update successfully')
      navigate('/')
    }else{
      alert(`Can't update book due to internal error`)
    }
  }

  return(
    <>
      <Navbar/>
      <div className="bg-white border-4 w-100 h-full rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit Book</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
          </button>
        </div>
        <div className="p-6 h-full w-100 space-y-6">
          <form onSubmit={updateBook}>
            
              <div className="mt-2">
                <label
                  htmlFor="bookName"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  name="bookName"
                  id="product-name"
                  onChange={(event)=>handleChange(event)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder={book.bookName}
                  
                /> 
              </div>
              <div className="mt-2">
                <label
                  htmlFor="auther"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="auther"
                  id="brand"
                  onChange={(event)=>handleChange(event)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder={book.bookAuther}
                  
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={(event)=>handleChange(event)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder={book.bookPrice}
                  
                />
              </div>
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Edit book
              </button>
          </form>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
        </div>
      </div>
    </>
  )
}

export default EditPage