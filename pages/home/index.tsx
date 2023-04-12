import { layouts } from "@/components/layouts";
import { CMPage } from "@/components/layouts/types";
import useRedirect from "@/hooks/useRedirect";

interface HomeProps {}

const Home: CMPage = (props: HomeProps) => {
  useRedirect("/home/recommend");
  return <></>;
};
export default Home;

Home.Layout = layouts["Home"];
