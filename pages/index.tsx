import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      HomePage
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default HomePage;
