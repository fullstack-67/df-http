import { FC } from "react";
import styles from "../styles/style.module.css";

interface Props {
  clock: string;
  refetch?: () => void;
  withRefetch?: Boolean;
}

const Clock: FC<Props> = ({ clock, refetch, withRefetch }) => {
  if (!withRefetch) {
    return <kbd>{clock}</kbd>;
  } else {
    return (
      <article>
        <div className={styles.clockWrapper}>
          <span className={styles.clockText}>{clock}</span>
          <button onClick={() => refetch && refetch()}>Refetch</button>
        </div>
      </article>
    );
  }
};

export default Clock;
