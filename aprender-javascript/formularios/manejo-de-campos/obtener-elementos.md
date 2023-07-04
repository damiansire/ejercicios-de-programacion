Obtener los valores desde la propiedad elements de forma mas cool

```
const formToExpense = (elements: HTMLFormControlsCollection) => {
  const { namedItem } = elements;
  const expense: Expense = {
    date: (namedItem("date") as HTMLInputElement)?.value || "",
    description: (namedItem("description") as HTMLInputElement)?.value || "",
    amount: (namedItem("amount") as HTMLInputElement)?.value || "",
    currency: (namedItem("currency") as HTMLInputElement)?.value || "",
    category: (namedItem("category") as HTMLInputElement)?.value || "",
  };

  return expense;
};
```
