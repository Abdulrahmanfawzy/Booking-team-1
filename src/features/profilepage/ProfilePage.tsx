import ProfileSidebar from "./components/ProfileSidebar";
import PersonalInformationForm from "./components/PersonalInformationForm";
import Nav from "../../components/shared/nav/Nav";
import Footer from "../../components/shared/footer/Footer";

const ProfilePage = () => {
  return (
    <>
      <Nav />
      <main className="max-w-[1240px] mx-auto flex gap-12 py-16">
        <ProfileSidebar />
        <PersonalInformationForm />
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
