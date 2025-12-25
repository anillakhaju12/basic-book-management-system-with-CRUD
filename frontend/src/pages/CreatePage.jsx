import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function CreatePage(){
  const navigate = useNavigate()
  const [bookData, setBookData] = useState({
    Auther: "",
    Name: "",
    Price:""
  })
  const handleChange = (event)=>{
    const {name, value } = event.target
    setBookData({
      ...bookData,
      [name] : value
    })
    console.log(bookData)
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/api/books',bookData)
    if(response.status === 200){
      alert('book added successfully')
      navigate("/")
    }else{
      alert("Can't add book")
    }
  }
  return(
    <>
      <Navbar/>
      <div className="bg-white border-4 w-100 h-full rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Book</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
          </button>
        </div>
        <div className="p-6 h-full w-100 space-y-6">
          <form onSubmit={handleSubmit}>
            
              <div className="mt-2">
                <label
                  htmlFor="Name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="product-name"
                  onChange={(event)=>handleChange(event)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Rich Dad Poor Dad"
                  required
                /> 
              </div>
              <div className="mt-2">
                <label
                  htmlFor="Auther"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="Auther"
                  id="brand"
                  onChange={(event)=>handleChange(event)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Robert t. Kiyosaki"
                  required
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="Price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="Price"
                  id="price"
                  onChange={(event)=>handleChange(event)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Rs. 1534"
                  required
                />
              </div>
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Add book
              </button>
          </form>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
        </div>
      </div>
    </>
  )
}

export default CreatePage