import Page from "../components/page";
import { useSelector } from "react-redux";

export default function Index() {
  const count = useSelector((state) => state.count);
  console.log("props on Index", count);
  return <Page />;
}
