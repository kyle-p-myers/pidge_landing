import Image from "next/image";
import NavMenu from "./components/NavMenu";
import ContentContainerOne from "./components/ContentContainerOne";
import ContentContainerTwo from "./components/ContentContainerTwo";
import ContentContainerThree from "./components/ContentContainerThree";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <div className="ml-6 mr-6">
      <NavMenu/>
      </div>
    <div className="ml-32 mr-20 mt-32">
      <div className="mb-72">
        <ContentContainerOne />
      </div>
      <div className="mb-72">
    <ContentContainerTwo />
    </div>
    <ContentContainerThree />
    <ContactForm />
    </div>
    <div className="mt-32">
    <Footer />
    </div>
   </main>
  );
}
