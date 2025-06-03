import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // let count = 0;
  // const handleClick = () => {
  //   setVisibility(true);
  //   count++;
  //   console.log(isVisible);
  // };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 15, category: "Groceries" },
    { id: 3, description: "ccc", amount: 20, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 50, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisiblility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisiblility(true)}>
        My Button
      </Button> */}

      {/* <ListGroup heading="Miami" items={items} onSelectItem={() => {}} /> */}
      {/* <Like onClick={() => console.log("Clicked")} /> */}
      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}

      {/* <Form /> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
