
import { ArrowRight } from "lucide-react";

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

export const DemoPreview = () => {

  // const [typed, setTyped] = useState('');
  // const [revealed, setRevealed] = useState(false);

  // useEffect(() => {
  //   let i = 0;
  //   const typing = setInterval(() => {
  //     i++;
  //     setTyped(DEMO_SUBTASKS.slice(0, i));

  //     if (i === DEMO_TITLE.length) {
  //       clearInterval(typing);
  //       setTimeout(() => setRevealed(true), 400);
  //     }
  //   }, 35);
  //   return () => clearInterval(typing);
  // }, []);

  return (
    <div className="border p-6 rounded-sm">
      <div className="border-b-2 border-ink pb-3 mb-6 gap-3 flex items-center ">
        <span className="flex-1 text-lg">
          <span className="inline-block w-0.5 h-5 bg-ink ml-0.5 animate-pulse align-middle"/>
        </span>
        <span>
          Break it down <ArrowRight size={16} />
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6 text-xs">
        <span>Learning</span>
        <span>.</span>
        <span>3h 10m total</span>
      </div>

      <ul>
        {DEMO_SUBTASKS.map((subTask, index) => (
          <li key={subTask.id}>
            {index !== DEMO_SUBTASKS.length - 1 && <span />}
            <span />
            <div>
              <span>{subTask.description}</span>
              <span>{subTask.estimated_minutes}m</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
