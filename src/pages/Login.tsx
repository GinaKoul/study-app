import Form from "../components/FormElements/Form.jsx";
import Button from "../components/Button/Button.tsx";

const Login: React.FC = () => {
  return (
    <Form>
      <h2>Sign in</h2>
      <label htmlFor="loginUsername">
        <span>Username</span>
        <input
          id="loginUsername"
          type="text"
          placeholder="Please add your username"
        />
      </label>
      <label htmlFor="loginPassword">Password</label>
      <input id="loginPassword" type="password" />
      <Button label="Log In" />
      <p>Dont have an account?</p> Sign up
    </Form>
  );
};

export default Login;
