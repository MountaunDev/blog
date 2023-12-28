import { EnhancedTopicsFields } from "@/types/topic";
import React, { useState } from "react";

interface BadgeProps {
  label: string | undefined;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelection = () => {
    setSelected(!selected);
  };

  return (
    <span
      className={`badge cursor-pointer inline-block px-6 py-3 rounded-full 
                  text-sm font-semibold mr-4 mb-4 ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
      onClick={handleSelection}
    >
      {label}
    </span>
  );
};

interface TopicBadgeProps {
  topicsList: EnhancedTopicsFields[];
}
const TopicBadge = ({ topicsList }: TopicBadgeProps) => {
  return (
    <div className="flex flex-wrap">
      {topicsList.map((topic, index) => (
        <Badge key={index} label={topic.label} />
      ))}
    </div>
  );
};

export default TopicBadge;
