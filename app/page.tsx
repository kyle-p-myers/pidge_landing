import Image from "next/image";
import NavMenu from "./components/NavMenu";
import ContentContainerOne from "./components/ContentContainerOne";
import ContentContainerTwo from "./components/ContentContainerTwo";
import ContentContainerThree from "./components/ContentContainerThree";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="ml-6 mr-6">
      <NavMenu/>
      </div>
    <div className="ml-32 mr-20 mt-32">
      <div className="mb-72">
        <ContentContainerOne />
      </div>
    <ContentContainerTwo />
    <ContentContainerThree />
    <ContactForm />
    </div>
   </main>
  );
}
