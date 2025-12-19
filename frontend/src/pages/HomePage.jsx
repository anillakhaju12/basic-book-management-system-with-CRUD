import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function HomePage() {
  const [books, setBooks] = useState([])
  const fetchBooks = async ()=>{
  const response = await axios.get("http://localhost:5000/api/books")
  const data = response.data.bookList
  setBooks(data)
  }

  useEffect(()=>{
    fetchBooks();
  },[])
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {
          books.map((book)=>{
            return(
              <Card book ={book} key={book.id}/>
            )
          })
        }

      </div>

    </>
  );
}

export default HomePage;
