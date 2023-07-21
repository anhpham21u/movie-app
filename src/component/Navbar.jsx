import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import styles from "./navbar.module.scss";
import logoImg from "./../assets/img/logo.png";

function MyNav() {
  const navigate = useNavigate();
  const inputSearchEle = useRef(null);

  const handleHead = () => {
    navigate("/");
  };

  const handleSearch = () => {
    navigate(`/search?q=${inputSearchEle.current.value}`);
  };

  return (
    <div className={"bg-myDark2"}>
      <Navbar expand="lg" className="navbar-dark px-5">
        <img
          src={logoImg}
          alt="logo"
          width={"75px"}
          className="logo"
          onClick={handleHead}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={"nav-link mx-2"}>
              Trang chủ
            </Link>
            <Link to="/login" className={"nav-link mx-2"}>
              Đăng nhập
            </Link>
            <Link to="/now" className={"nav-link mx-2"}>
              Đề cử
            </Link>
            <Link to="/popular" className={"nav-link mx-2"}>
              Phổ biến
            </Link>
            <Link to="/rate" className={"nav-link mx-2"}>
              Đánh giá
            </Link>
            <Link to="/upcoming" className={"nav-link mx-2"}>
              Sắp chiếu
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Tìm kiếm"
              className="me-2"
              aria-label="Search"
              style={{ width: "300px" }}
              ref={inputSearchEle}
            />
            <Button
              variant="outline"
              className={styles.btn + " mx-2"}
              onClick={handleSearch}
            >
              Tìm kiếm
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
