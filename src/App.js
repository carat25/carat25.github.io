import styles from "./App.module.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Brand } from "./components/Brand/Brand";
import { HomePage } from "./containers/HomePage/HomePage";
import { AboutSection } from "./containers/AboutSection/AboutSection";
import { Contact } from "./components/Contact/Contact";
import { ProjectSection } from "./containers/ProjectSection/ProjectSection.jsx";
import { ContactSection } from "./containers/ContactSection/ContactSection";

import React, { useCallback, useEffect, useState } from "react";

const App = () => {


  return (
    <>
      <div className={styles.app}>
        <header className={styles.navbar}>
          <NavBar />
        </header>
        <main>
          <Brand />
        </main>
        <section>
          <AboutSection />
        </section>
        <section>
       <ProjectSection />

        </section>
        <section>
          <ContactSection />
        </section>
   </div>
    </>
  );
};

export default App;
