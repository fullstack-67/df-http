import Nav from "./components/Nav";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [clock, setClock] = useState("");
  const refetch = () => {
    1;
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

  return (
    <div className="container">
      <Nav clock={clock} />
      <Body clock={clock} refetch={refetch} />
    </div>
  );
}

export default App;
