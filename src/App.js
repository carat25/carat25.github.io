import styles from "./App.module.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Brand } from "./components/Brand/Brand";
import { HomePage } from "./containers/HomePage/HomePage";
import { AboutSection } from "./containers/AboutSection/AboutSection";
import { Contact } from "./components/Contact/Contact";
import { ProjectSection } from "./containers/ProjectSection/ProjectSection.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Router> */}
      <div className={styles.app}>
        <header className={styles.navbar}>
          {/* <Link to="/HomePage" className={styles.brand}> */}
          <NavBar />
          {/* <Contact /> */}
          {/* </Link> */}
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
        {/* <Switch>
            <Route exact path="/">
              <Redirect to="/HomePage" />
            </Route>
            <Route exact path="/HomePage">
              <HomePage />
            </Route>
            <Route exact path="/ProjectSection">
              <ProjectSection />
            </Route>
            <Route exact path="/AboutSection">
              <AboutSection />
            </Route>
          </Switch> */}
   </div>
      {/* </Router> */}
    </>
  );
};

export default App;
