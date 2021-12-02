import React from "react";

function Card2({ title, text }) {
  return (
    <>

      <div className="card color3 text-center animate__animated animate__fadeInUp">

        <div className="card-body p-1 m-3 border border-0 border-start border-5 border-danger fw-bold">
          <h4 className="text-center">{title}</h4>
          <p className="  text-start">
            {text ? text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
          </p>
        </div>
      </div>
    </>
  );
}
export default Card2;
