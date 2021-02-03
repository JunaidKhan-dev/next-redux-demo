import Page from "../components/page";

export default function SSR(props) {
  console.log("props on SSR", props);
  return <Page />;
}
