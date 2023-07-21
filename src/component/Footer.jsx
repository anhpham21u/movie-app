import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import logoImg from "./../assets/img/logo.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-myDark2">
      <div className="row p-5">
        <div className="col-sm text-center">
          <img
            src={logoImg}
            alt="logo"
            width={"100px"}
            className="logo"
            onClick={() => {
              navigate("/movie-app");
            }}
          />
        </div>

        <div className="col-sm">
          <ul style={{ listStyleType: "none" }}>
            <li className="mb-2">
              <p className={styles.headLink}>Thể loại</p>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/movie-app/now">
                Phim đề cử
              </Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/movie-app/popular">
                Phim phổ biến
              </Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/movie-app/rate">
                Phim theo đánh giá
              </Link>
            </li>
            <li className="mb-2">
              <Link className={styles.link} to="/movie-app/upcoming">
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
