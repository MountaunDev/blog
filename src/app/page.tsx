import "@/app/app.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "./components/Breadcumb/Breadcrumb";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Header />
      <Breadcrumb title="Blogsssss" page="Blog" />
    </main>
  );
}
