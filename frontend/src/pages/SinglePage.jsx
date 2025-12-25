import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import SingleBookView from "../components/SingleBookView"


function SinglePage(){
  const [book, setBook] = useState({})
  const navigate = useNavigate()
  const {id} = useParams()//destructuring the id which we have given in '/single-page/:id'

  const fetchSingleBook = async ()=>{
    const response = await axios.get("http://localhost:5000/api/books/" + id)
    console.log(response)
    setBook(response.data.singleBook)
  } 
  useEffect(()=>{
    fetchSingleBook()
  },[])

  const deleteBook = async ()=>{
    const response = await axios.delete("http://localhost:5000/api/books/" + id)
    if(response.status === 200){
      navigate("/")
    }else{
      alert("Something went wrong")
    }
  }

    
  return (
    <>
      <Navbar/>
      <SingleBookView bookId = {book.id} bookName = {book.bookName} auther = {book.bookAuther} price = {book.bookPrice} deleteFunc = {deleteBook}/>
    </>

  )
}

export default SinglePage