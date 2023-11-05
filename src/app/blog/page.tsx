import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import BlogGridOne from "@/app/blog/components/GridOne";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Header />
      <Breadcrumb title="Blogsssss" page="Blog" />
      <div className="section-padding-equal">
        <div className="container">
          <div className="row row-40">
            <div className="col-lg-8">
              <BlogGridOne />
            </div>
            <div className="col-lg-4">
              {/* <p>Blog grid one</p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
