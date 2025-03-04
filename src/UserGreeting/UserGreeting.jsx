import styles from "./UserGreeting.module.css";
import PropTypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome, {props.username}</h2>;
  //   }
  //   return <h2>Please log to Continue</h2>;

  const welcomeMesage = (
    <h2 className={styles.welcomeMessage}>Welcome, {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className={styles.loginPrompt}>
      Please log to Continue, {props.username}
    </h2>
  );

  return props.isLoggedIn ? welcomeMesage : loginPrompt;
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
