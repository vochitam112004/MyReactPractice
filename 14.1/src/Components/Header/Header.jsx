import Logo from "../../assets/Logo.png";
import "./Header.css";
function Header(props) {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo tu hoc .cc" />
        <p>Học React - Khám phá cách xây dựng ứng dụng linh hoạt</p>
      </header>
    </>
  );
}
export default Header;
