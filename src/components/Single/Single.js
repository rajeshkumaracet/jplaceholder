import React from "react";
import { Link } from "react-router-dom";
import "./Single.scss";

const Single = ({ data, comments }) => {
  return (
    <>
      <div className="card p-3">
        <Link className="btn btn-secondary mb-4" to="/">
          <i class="fas fa-arrow-left" /> Go Back
        </Link>
        <h3 className="card-title">{data.title.toUpperCase()}</h3>
        <p className=" lead">{data.body}</p>
        <hr />
        <h1 className="text-center">User Opinions!</h1>
        {comments.map(cur => (
          <div>
            <p className="new">{cur.body}</p>
            <div className="ff">
              <span>
                <i class="fas fa-id-card-alt" /> {cur.name}
              </span>
              <span>
                <i class="fas fa-envelope-open" /> {cur.email}
              </span>
            </div>
            <hr />
          </div>
        ))}
        <hr />
      </div>
    </>
  );
};

export default Single;
