/**
 * Step 1 - Create a PhoneNumberInput component that handles users inputs for phone numbers
 *
 * Requirements
 * - The input should only accept numbers
 * - The input should be formatted as follows: (123) 456-7890
 * - It should have an optional prop called maxLength which limits the number of characters but is still a valid phone number (formatted as (123) 456-7890)
 *
 */

const PhoneNumberInput = () => {
  return <input />;
};

export const Question3 = () => {
  return (
    <>
      <h2>Question 3</h2>
      <PhoneNumberInput />
    </>
  );
};

export default Question3;
