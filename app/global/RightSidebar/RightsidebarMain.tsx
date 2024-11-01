import React from "react";
import FollowCard from "./FollowCard";
import TrandingTopic from "./TrandingTopic";

type Props = {};

const RightsidebarMain = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-y-5 w-full p-4 rounded-lg shadow bg-white dark:bg-slate-950">
        <h2 className="font-semibold text-lg">Who to follow</h2>
        {[1, 2, 3, 4].map((item) => (
          <FollowCard key={item} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 w-full p-4 rounded-lg shadow bg-white dark:bg-slate-950 mt-4">
        <h2 className="font-semibold text-lg">Tranding topic</h2>
        {[1, 2, 3, 4].map((item) => (
          <TrandingTopic key={item} />
        ))}
      </div>
    </>
  );
};

export default RightsidebarMain;
