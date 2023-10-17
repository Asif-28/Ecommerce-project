import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

export const Page = () => {
  return (
    <div className="section">
      <div className="md:flex justify-center md:gap-10">
        <div className="md:w-30">
          <LeftPanel />
        </div>
        <div className="md:w-70 ">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};
