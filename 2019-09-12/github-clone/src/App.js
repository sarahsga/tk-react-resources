import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import SignUpSection from "./components/SignUpSection";
import GithubEntreprise from "./components/GithubEntreprise";
import GithubActions from "./components/GithubActions";
import UserCompanies from "./components/UserCompanies";
import GithubTeams from "./components/GithubTeams";
import Benefits from "./components/Benefits";
import EntrepriseUses from "./components/EntrepriseUses";
import Security from "./components/Security";
import Host from "./components/Host";
import Integrations from "./components/Integrations";
import CommunitySection from "./components/CommunitySection";
import Statistics from "./components/Statistics";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// JSX (looks just like HTML)

function App() {
  return (
    <main>
      <NavBar />
      <SignUpSection />
      <GithubEntreprise/>
      <GithubActions />
      <UserCompanies />
      <GithubTeams />
      <Benefits />
      <EntrepriseUses />
      <Security />
      <Host />
      <Integrations />
      <CommunitySection />
      <Statistics />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
