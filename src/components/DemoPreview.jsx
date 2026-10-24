

export const DemoPreview = () => {
  const DEMO_TITLE = "Prepare for my Rails interview on Friday";
  const DEMO_SUBTASKS = [
    {
      id: 1,
      description: "Review ActiveRecord associations",
      estimated_minutes: 30,
    },
    {
      id: 2,
      description: "Practice Sidekiq background jobs",
      estimated_minutes: 45,
    },
    {
      id: 3,
      description: "Rebuild a REST API from scratch",
      estimated_minutes: 60,
    },
    {
      id: 4,
      description: "Review common system design questions",
      estimated_minutes: 40,
    },
    {
      id: 5,
      description: "Prepare 3 questions to ask the interviewer",
      estimated_minutes: 15,
    },
  ];

  return <div>DemoPreview</div>;
};
