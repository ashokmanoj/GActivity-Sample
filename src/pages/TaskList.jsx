import TaskListFilter from "../components/filters/TaskListFilter";
import TaskList from "../components/tasks/TaskList";

export default function TaskListPage() {
  return (
    <div>
      <TaskListFilter />
      <div className="mt-8">
        <TaskList />
      </div>
    </div>
  );
}
