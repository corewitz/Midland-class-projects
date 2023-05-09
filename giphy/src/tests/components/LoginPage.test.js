//! If the password or username is too short, make sure the button is disabled

//! mock a success, and make sure full functionality works

//! Ensure the correct format and data is being sent if the user logs in

//! Mock a failure, and display a message to the user

import React from "react";
import LoginPage from "../../components/LoginPage";
import { UserProvider } from "../../context/UserContext";
import { render, fireEvent, screen } from "@testing-library/react";
//import "@testing-library/jest-dom";

describe('LoginPage', () => {
    
    let mockUser;
    let mockSetUser;
    let mockClearUser;

    beforeEach(() => {
        mockUser = null;
        mockSetUser = jest.fn();
        mockClearUser = jest.fn();
    })

    it('should disable the button if username or password is less than 4 characters', () => {
      const { getByTestId } = render(
      <UserProvider 
      value={{user: mockUser, setUser: mockSetUser, clearUser: mockClearUser}}>
         <LoginPage />
      </UserProvider>
    );

      const button = getByTestId ('button');

      expect(button).toBeDisabled();

      fireEvent.change(screen.getByPlaceholderText('Username'), {
        target: {value: "Test"},
      });

      fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: {value: "pa$$word"}
      });

    });
});