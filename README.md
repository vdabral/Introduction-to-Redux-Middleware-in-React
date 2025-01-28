# Redux Middleware in React

This is a simple React application that demonstrates how to integrate Redux middleware into a React app. The project includes two custom middleware functions that log the action type and payload whenever an action is dispatched.

## **Overview**

- This project uses **Redux** for state management and **Redux Middleware** for extending Redux functionality.
- Custom middleware logs the **action type** and **payload** when actions are dispatched.
- The project also includes a simple **counter** that can be incremented and decremented using Redux actions.

## **Features**
- **Redux Store**: Manage state with Redux.
- **Custom Middleware**:
  - Action Type Logger: Logs the action type.
  - Payload Logger: Logs the payload of the action.
- **React-Redux**: Connect React components to the Redux store using `useDispatch` and `useSelector` hooks.

## **Technologies Used**
- React
- Redux
- React-Redux
- JavaScript

## **Setup and Installation**

### **1. Clone the Repository**

To get started, clone the repository to your local machine:

git clone [<repository-url>](https://github.com/vdabral/Introduction-to-Redux-Middleware-in-React)
cd redux-middleware-demo


### **2. Install Dependencies**

Make sure to install the required dependencies:

npm install


### **3. Run the Application**

Once the dependencies are installed, you can start the app with:


npm start

This will start the React development server, and you can view the app at `http://localhost:3000`.

### **4. Usage**

The app will display a counter value and two buttons to **Increment** and **Decrement** the count. Each button click dispatches an action to the Redux store, and the custom middleware logs the action type and payload to the browser's console.

### **Example Logs in the Console**

When you click **Increment** or **Decrement**, the following will appear in the browser console:


Dispatching Action Type: INCREMENT
Action Payload: { value: 1 }

Dispatching Action Type: DECREMENT
Action Payload: { value: -1 }


## **How It Works**

1. **Redux Store Setup**: The Redux store is configured with two custom middleware: `actionTypeLogger` and `payloadLogger`.
2. **React Integration**: The app uses the `useDispatch` and `useSelector` hooks from `react-redux` to interact with the Redux store.
3. **Middleware**: 
   - `actionTypeLogger` logs every action's type.
   - `payloadLogger` logs the payload of the dispatched actions.
4. **Dispatching Actions**: The buttons in the React component dispatch actions like `INCREMENT` and `DECREMENT`, which update the Redux state.

## **Observations & Learnings**
- Middleware in Redux is a powerful tool for extending functionality, such as logging or handling asynchronous actions.
- The `createRoot()` API in React 18 is used for rendering, replacing the old `render()` method.

