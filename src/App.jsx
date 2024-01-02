import ProgressDay from "@/components/ProgressDayAndYear/ProgressDay";
import ProgressHour from "@/components/ProgressDayAndYear/ProgressHour";
import ProgressMinute from "@/components/ProgressDayAndYear/ProgressMinute";
import ProgressYear from "@/components/ProgressDayAndYear/ProgressYear";

const Index = () => {
  return (
    <>
      <div className="font-SF-Pro-Display grid min-h-screen place-content-center bg-rose-800 text-white">
        <div className="title mb-4 text-center text-3xl">Time progress:</div>
        <div className="container w-[90vw] sm:w-[40rem]">
          <ProgressMinute />
          <ProgressHour />
          <ProgressDay />
          <ProgressYear />
        </div>
      </div>
    </>
  );
};

export default Index;
