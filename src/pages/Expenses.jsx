import ExpensesFilter from "../components/filters/ExpensesFilter";

export default function Expenses() {
  return (
    <div>
      <ExpensesFilter />

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Expenses Summary</h2>
      </div>
    </div>
  );
}
