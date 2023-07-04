import stylesNav from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

function Footer() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#111" }}>
      <div className="row p-5">
        <div className="col-sm text-center">
          <p
            className={stylesNav.head + "  myText-yellow fs-2"}
            onClick={() => {
              navigate("/");
            }}
          >
            Movie
          </p>
        </div>

        <div className="col-sm">
          <ul style={{ listStyleType: "none" }}>
            <li className="mb-2">
              <p className={styles.headLink}>Thể loại</p>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/now">
                Phim đề cử
              </Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/popular">
                Phim phổ biến
              </Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/rate">
                Phim theo đánh giá
              </Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/upcoming">
                Phim sắp chiếu
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <ul style={{ listStyleType: "none" }}>
            <li className="mb-2">
              <p className={styles.headLink}>Trợ giúp</p>
            </li>
            <li className="mb-2">
              <Link className={styles.link}>Hỏi đáp</Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link}>Liên hệ</Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link}>Tin tức</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <ul style={{ listStyleType: "none" }}>
            <li className="mb-2">
              <p className={styles.headLink}>Thông tin</p>
            </li>
            <li className="mb-2">
              <Link className={styles.link}>Điều khoản sử dụng</Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link}>Chính sách riêng tư</Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link}>Khiếu nại bản quyền</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
