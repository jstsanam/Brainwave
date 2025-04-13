import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { useState } from "react";

const App = () => {
  const [openModal, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(!openModal);
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {openModal == true && <Modal />}{" "}
        <Header handleOpenModal={handleOpenModal} />
        <Hero />
        <Benefits />
      </div>

      <ButtonGradient />
      <Collaborations />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
};

export default App;
