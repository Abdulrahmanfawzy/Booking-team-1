import ProfileSidebar from "./components/ProfileSidebar";
import PersonalInformationForm from "./components/PersonalInformationForm";

const ProfilePage = () => {
  return (
    <>
      <main className="max-w-[1240px] mx-auto flex gap-12 py-16">
        <ProfileSidebar />
        <PersonalInformationForm />
      </main>
    </>
  );
};

export default ProfilePage;
