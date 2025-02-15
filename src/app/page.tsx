import About from "@/components/About";
import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Contacts from "@/components/Contacts";
import Service from "@/components/Service";


export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <CallToAction />
      <Clients />
      <Contacts />
    </>
  );
}
