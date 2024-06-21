
export const Question1 = () => {
  /**
   * Step 1 Initial setup:
   * List the fruits in the fruits array.
   *
   * Step 2 - Search input
   * Use the input filed to filter the list of fruits as the user types in realtime.
   *
   * Step 3 - No matches
   * Display a message when there are no matches.
   */

  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Strawberry",
    "Blueberry",
    "Mango",
    "Kiwi",
    "Pineapple",
    "Peach",
    "Grapes",
  ];


  return (
    <>
      <h2>Question 1</h2>
      <input type="text" placeholder="Search for fruit " />
    </>
  );
};

export default Question1;
