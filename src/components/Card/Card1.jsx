import React from "react";

function Card1({ title, text }) {
  return (
    <>

      <div className="card text-center animate__animated animate__fadeInUp">

        <div className="card-body text-light p-3 m-4 border border-0 border-start border-5 border-danger">
          <h2 className="text-dark text-start">{title}</h2>
          <p className="text-dark text-start">
            {text ? text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
          </p>
        </div>
      </div>
    </>
  );
}
export default Card1;
