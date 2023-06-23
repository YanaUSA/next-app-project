import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  console.log("router", router);

  const handleClick = () => {
    //possibility to navigate via useRouter hook
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <Link href="/product">Products</Link>
      <button onClick={handleClick}>Please order</button>
    </>
  );
}
export default Home;
