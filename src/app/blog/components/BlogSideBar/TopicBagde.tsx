//TODO: Add styles to change colors when the app is in dar mode
import { EnhancedTopicsFields } from "@/types/topic";
import React, { useState } from "react";
import { FilterPostByBadge } from "../../page";

interface BadgeProps {
  label?: string;
  selected: string[];
  topicId: string;
  handleSelection: (topicId: string) => void;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  topicId,
  selected,
  handleSelection,
}) => {
  if (label === undefined) {
    return null;
  }
  return (
    <span
      role="button"
      tabIndex={0}
      className={`badge cursor-pointer inline-block px-6 py-3 rounded-full 
                  text-sm font-semibold mr-4 mb-4 ${
                    selected.includes(topicId)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
      onClick={() => handleSelection(topicId)}
    >
      {label}
    </span>
  );
};

interface TopicBadgeProps {
  topicsList: EnhancedTopicsFields[];
  filterPostsByBadge: FilterPostByBadge;
}

const TopicBadge: React.FC<TopicBadgeProps> = ({
  topicsList,
  filterPostsByBadge,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelection = (topicId: string) => {
    let topicsSelected = new Set([...selected]);

    if (topicsSelected.has(topicId)) {
      topicsSelected.delete(topicId);
    } else {
      topicsSelected.add(topicId);
    }

    const topicsArray = Array.from(topicsSelected);
    setSelected(topicsArray);
    filterPostsByBadge({ topicsSelected: topicsArray });
  };

  return (
    <div className="flex flex-wrap">
      {topicsList.map((topic) =>
        topic.id ? (
          <Badge
            key={topic.id}
            topicId={topic.id}
            label={topic.label}
            handleSelection={handleSelection}
            selected={selected}
          />
        ) : null,
      )}
    </div>
  );
};

export default TopicBadge;
