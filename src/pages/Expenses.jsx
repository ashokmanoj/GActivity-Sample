import ExpensesFilter from "../components/filters/ExpensesFilter";

export default function Expenses() {
  return (
    <div>
      <ExpensesFilter />

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">Expenses Summary</h2>
        <span>Expenses Summary data show here..........</span>
      </div>
    </div>
  );
}
