import React from "react";

const Posts = ({ items }) => {
  return (
    <div>
      {items.map((obj, index) => {
        return <p key={obj.id}>{obj.first_name}</p>;
      })}
    </div>
  );
};

export default Posts;
