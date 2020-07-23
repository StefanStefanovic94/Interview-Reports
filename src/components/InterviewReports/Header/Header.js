import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { Col } from 'react-bootstrap'

const Header = () => {
  return (
     <div className={style.wrapper}>
      <div className="row">
        <h1 className={`${style.main_title} col-lg-8`}>
          Interview reports
        </h1>
        <div className="col-lg-4">
          <div className={`${style.btn_wrapper} row`}>
            <Link className={`col-lg-4 ${style.btn}`} to="/">
              Canditades
            </Link>
            <Link className={`col-lg-4 ${style.btn}`} to="/admin">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
