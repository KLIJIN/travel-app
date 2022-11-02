import { useRouter } from "next/router";
import Layout from "../../app/components/Layout/Layout";

export default function SomePlace() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Layout>{router.query.slug}</Layout>
    </div>
  );
}
