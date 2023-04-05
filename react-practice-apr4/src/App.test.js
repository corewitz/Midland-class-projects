import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


export function Timer() {
  let time = 10;
  const interval = setInterval(() => {
    console.log(time);
    time--;
    if (time === 0) {
      clearInterval(interval);
    }
  }, 10000);

  return (
    <div>
      {time}
    </div>
  )
}

export function Users() {
  const users= [
    {name: "Jay", age: 33, hair: "brown"},
    {name: "Joe", age: 34, hair: "black"},
    {name: "Jeff", age: 35, hair: "blue"},
    {name: "John", age: 36, hair: "white"},
    {name: "Jesper", age: 37, hair: "red"},
  ]

  return (
    <div>
      {users.map((user, index) => (
        <div key = {index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Hair Color: {user.hair}</p>
        </div>
      ))}
    </div>
  )
}



export function RandomNumber () {
  const number = Math.floor(Math.random())
 Math.floor(Math.random() * 10) +1;
return (
  <div>
    <p>Random Number: {number}</p>
  </div>
)
}






/*
1. Create a simple component that has a timer that counts down to the page. (Why might this not be possible at the moment?)
2. Create an array of 5 users (each being an object with at least ) and display them all to the page using a loop. Think about how you would do it using the `{}` to render.
3. Create a component that generates a random number between 1-10 and displays it to the page. Have that component appear 5 times on the page to see if the number is the same or not. Do you think they'll be the same or not?
4. Add a conditionally rendered message to the component in step 3 that shows a message to the DOM if the number is odd or even. (i.e. `Number is even`). There are multiple ways to do it, but think about what might be the best approach.
5. Create a button that (while we can't update the page until later) logs something to the console when the user clicks it. Also think about how we might have approached some of the projects we worked on last week.
*/