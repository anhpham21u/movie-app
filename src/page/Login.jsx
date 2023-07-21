import Navbar from "./../component/Navbar";
import Footer from "../component/Footer";
import styles from "./login.module.scss";
import { Button, Form } from "react-bootstrap";

function Login() {
  return (
    <div>
      <Navbar />

      <div
        className="px-5 bg-myDark text-light py-5"
        style={{ height: "65vh" }}
      >
        <h4 className="text-center p-4" style={{ color: "#ff8a00" }}>
          Đăng nhập
        </h4>

        <div className="d-lg-flex justify-content-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tên đăng nhập"
                className={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                className={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Tôi đồng ý với điều khoản sử dụng"
              />
            </Form.Group>

            <Button variant="primary">Đăng nhập</Button>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
