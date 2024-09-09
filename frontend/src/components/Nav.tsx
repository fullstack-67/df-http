import { FC } from "react";
import Clock from "./Clock";

interface Props {
  clock: string;
}

const Nav: FC<Props> = ({ clock }) => {
  return (
    <header style={{ padding: "1rem 0" }}>
      <nav>
        <ul>
          <li>
            <a href="/" className="custom-icon">
              <i className="fa-solid fa-xl fa-home"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Clock clock={clock} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
