import Page from "../components/page";
import { initializeStore, useStore } from "../store";
export default function SSG(props) {
  const reduxStore = useStore();
  console.log(reduxStore.getState());
  console.log("props on SSR", props);
  return <Page />;
}

// export function getStaticProps(context) {
//   return { props: { initialReduxState: reduxStore.getState() } };
// }
