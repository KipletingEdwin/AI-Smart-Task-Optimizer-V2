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

  // const [typed, setTyped] = useState("");
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
    <> 
      <div>
    DemoPreview
    </div>
    </>
  )

};
