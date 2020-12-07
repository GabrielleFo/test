import React, { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
let items = [
  {
    id: 1,
    first_name: "Arjun",
    last_name: "A",
  },
  {
    id: 2,
    first_name: "Kalyan",
    last_name: "J",
  },
  {
    id: 3,
    first_name: "Raj",
    last_name: "Kiran",
  },
  {
    id: 4,
    first_name: "Naveen",
    last_name: "A",
  },
  {
    id: 5,
    first_name: "Pravinh",
    last_name: "A",
  },
  {
    id: 6,
    first_name: "Srinivas",
    last_name: "S",
  },
  {
    id: 7,
    first_name: "Mahipal",
    last_name: "K",
  },
  {
    id: 8,
    first_name: "Sathish",
    last_name: "Y",
  },
  {
    id: 9,
    first_name: "Aravind",
    last_name: "A",
  },
  {
    id: 10,
    first_name: "Phani",
    last_name: "C",
  },
  {
    id: 11,
    first_name: "Krishna",
    last_name: "A",
  },
  {
    id: 12,
    first_name: "Pradeep",
    last_name: "S",
  },
];
console.log(items);
function App() {
  // function paginator(items, current_page, per_page_items) {
  //   let page = current_page || 1,
  //     per_page = per_page_items || 5,
  //     offset = (page - 1) * per_page,
  //     paginatedItems = items.slice(offset).slice(0, per_page_items),
  //     total_pages = Math.ceil(items.length / per_page);

  //   return {
  //     page: page,
  //     per_page: per_page,
  //     pre_page: page - 1 ? page - 1 : null,
  //     next_page: total_pages > page ? page + 1 : null,
  //     total: items.length,
  //     total_pages: total_pages,
  //     data: paginatedItems,
  //   };
  // }
  // paginator(items);
  // console.log(paginator(items));

  // const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  //Get current page

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>MA LISTE</h1>
      <Posts items={currentPost} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
