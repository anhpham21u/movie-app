import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import styles from "./navbar.module.scss";

function MyNav() {
  const navigate = useNavigate();
  const inputSearchEle = useRef(null);

  const handleClick = () => {
    navigate("/");
  };

  const handleSearch = () => {
    navigate(`/search?q=${inputSearchEle.current.value}`);
  };

  return (
    <div style={{ backgroundColor: "#111" }}>
      <Navbar expand="lg" className="navbar-dark px-5">
        <Navbar.Brand
          className={styles.head + " myText-yellow fs-2"}
          onClick={handleClick}
        >
          Movie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={"nav-link fs-5 mx-2"}>
              Trang chủ
            </Link>
            <Link to="/login" className={"nav-link fs-5 mx-2"}>
              Đăng nhập
            </Link>
            <Link to="/now" className={"nav-link fs-5 mx-2"}>
              Đề cử
            </Link>
            <Link to="/popular" className={"nav-link fs-5 mx-2"}>
              Phổ biến
            </Link>
            <Link to="/rate" className={"nav-link fs-5 mx-2"}>
              Đánh giá
            </Link>
            <Link to="/upcoming" className={"nav-link fs-5 mx-2"}>
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
