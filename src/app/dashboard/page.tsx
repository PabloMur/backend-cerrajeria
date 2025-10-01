import Banner from "../components/Banner";

const DashboardPage = () => {
  return (
    <div className="flex flex-col bg-black p-2 gap-2 flex-1 overflow-y-scroll overflow-x-hidden scrollbar-none">
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </div>
  );
};

export default DashboardPage;
