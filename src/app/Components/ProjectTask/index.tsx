interface ProjectTaskProps {
  description: string;
}

export default function ProjectTask({ description }: ProjectTaskProps) {
  return (
    <li className="flex items-start gap-2">
      <img
        src="../assets/task_alt.svg"
        alt="task"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      <span className="leading-relaxed text-sm sm:text-base">
        {description}
      </span>
    </li>
  );
}
