import { useState, useEffect } from "react";
import axios from "axios";
function useClock() {
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

  return { clock, refetch };
}

export default useClock;
