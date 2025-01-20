import { NavLink } from "react-router-dom";
import { userAuthentication } from "../hooks/userAuthentication";
import { useAuthValue } from "../context/AuthContext";
import styles from "./Navbar.module.css";
import sair from "../../public/exit-svgrepo-com.svg";
import logo from "./../../public/logoDevBlog.png";
import userimg from "./../../public/user.svg";

const Navbar = () => {
  const { logout } = userAuthentication();
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      {/* Logo e nome do site */}
      <NavLink className={styles.brand} to="/">
        <div>
          <img src={logo} alt="Brand" width="50px" height="30px" /> Mini <span>Blog</span>
        </div>
      </NavLink>

      {/* Links de navegação */}
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>

      {/* Informações do usuário */}
      {user && (
        <div className={styles.user_info}>
          <img
            src={user.photoURL || userimg}
            alt="User"
            className={styles.user_img}
          />
          <div>
            <p className={styles.user_name}>Olá, {user.displayName}</p>
            <p className={styles.user_email}>{user.email}</p>
          </div>
          <button onClick={logout} className={styles.exit}>
            <img src={sair} alt="Sair" width="20" height="20" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
