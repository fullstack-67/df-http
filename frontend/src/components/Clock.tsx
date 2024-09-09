import { FC, useEffect, useState } from "react";
import axios from "axios";

interface Props {
  withRefetch?: Boolean;
}
const Clock: FC<Props> = ({ withRefetch }) => {
  const [clock, setClock] = useState("");
  const refetch = () => {
    axios
      .request<{ data: string }>({
        method: "GET",
        url: "/clock",
      })
      .then((res) => setClock(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    refetch();
  }, []);

  if (!withRefetch) {
    return <kbd>{clock}</kbd>;
  } else {
    return (
      <article
        className="grid"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>{clock}</strong>
        <button onClick={() => refetch()}>
          <small>Reset</small>
        </button>
      </article>
    );
  }
};

export default Clock;
