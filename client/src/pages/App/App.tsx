import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";
import Nav from "../../components/Nav/Nav";
import Tasks from "../../components/Tasks/Tasks";
import banner from "../../assets/bg-desktop-light.jpg";
import bannerDark from "../../assets/bg-desktop-dark.jpg";
import bannerMobile from "../../assets/bg-mobile-light.jpg";
import bannerMobileDark from "../../assets/bg-mobile-dark.jpg";
import st from "./App.module.css";
import Footer from "../../components/Footer/Footer";
import User from "../../components/User/User";

function App() {
  return (
    <>
      <header className={st.center}>
        <Banner
          imageLigth={banner}
          imageDark={bannerDark}
          imageLigthMobile={bannerMobile}
          imageDarkMobile={bannerMobileDark}
        />
        <Nav />
        <User />
      </header>
      <main className={st.center}>
        <section>
          <Form />
          <Tasks />
        </section>
      </main>
      <footer className={st.center}>
        <Footer />
      </footer>
    </>
  );
}
export default App;
