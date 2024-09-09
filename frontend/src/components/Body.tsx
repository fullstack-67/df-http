import { FC } from "react";
import Clock from "./Clock";

interface Props {
  clock: string;
  refetch: () => void;
}
const Body: FC<Props> = ({ clock, refetch }) => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Prop Drilling</h1>
      <Clock withRefetch={true} clock={clock} refetch={refetch} />
      <Clock withRefetch={true} clock={clock} />
      <Clock withRefetch={true} clock={clock} />
      <Clock withRefetch={true} clock={clock} />
      <Clock withRefetch={true} clock={clock} />
      <Clock withRefetch={true} clock={clock} />
    </main>
  );
};

export default Body;
