import React from "react";
import MapSection from "../Sections/Contact/Map/MapSection.js";
import ContactFormSection from "../Sections/Contact/ContactForm/ContactFormSection.js";
import DirectorySection from "../Sections/Contact/Directory/DirectorySection.js";
import MainMenuSection from "../Sections/MainMenu/MainMenuSection.js";
import FooterSection from "../Sections/Footer/FooterSection.js";
const ContactsView = () => {
  return (
    <>
      <MainMenuSection />
      <DirectorySection currentPage ="Contact"/>
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  );
};

export default ContactsView;
