import Logo from "../logo/Logo";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center justify-content-between bg-light p-3">
        <Logo />
        <Menu />
      </header>
    </>
  )
}

export default Header;