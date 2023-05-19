// Write your tests here
import React from 'react'
import AppFunctional from './AppFunctional'
import { render,fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

beforeEach(()=>{
  render(<AppFunctional/>)
})

test('sanity', () => {
  expect(true).toBe(true)
})
test('testCase1', () => {
  expect(screen.getByText("Koordinatlar (2, 2)")).toBeInTheDocument();
});
test('testCase2', async() => {
  const emailInputElement = document.querySelector("#email");
  fireEvent.change(emailInputElement, { target: { value: 'test@mail.com' }})
  expect(emailInputElement).toHaveValue("test@mail.com");
});
test('testCase3', async() => {
  const stepElement = document.querySelector("#steps");
  expect(stepElement).toHaveTextContent("0 kere ilerlediniz");
});
test('testCase4', async() => {
  const up = document.querySelector("#up");
  const down = document.querySelector("#down");
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");

  expect(up).toHaveTextContent("YUKARI");
  expect(down).toHaveTextContent("AŞAĞI");
  expect(left).toHaveTextContent("SOL");
  expect(right).toHaveTextContent("SAĞ");
});
test('testCase5', async() => {
  const up = document.querySelector("#up");
  const down = document.querySelector("#down");
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const reset = document.querySelector("#reset");
  const message = document.querySelector("#message");
  const coordinates = document.querySelector("#coordinates");
  const steps = document.querySelector("#steps");


  fireEvent.click(up);
  fireEvent.click(right);
  fireEvent.click(right);
  fireEvent.click(up);
  fireEvent.click(down);
  fireEvent.click(down);
  fireEvent.click(right);
  expect(message).toHaveTextContent("Sağa gidemezsiniz");
  fireEvent.click(left);
  fireEvent.click(left);
  expect(coordinates).toHaveTextContent("Koordinatlar (1, 3)");
  expect(steps).toHaveTextContent("6 kere ilerlediniz");
  fireEvent.click(reset);
  expect(coordinates).toHaveTextContent("Koordinatlar (2, 2)");
  expect(steps).toHaveTextContent("0 kere ilerlediniz");
});