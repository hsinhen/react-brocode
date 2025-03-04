import styles from "./List.module.css";
import PropTypes from "prop-types";

function List({ items = [], title = "" }) {
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => a.calories - b.calories);
  //   const lowCalfruit = fruits.filter((e) => e.calories <= 100);

  const listItems = items.map((e) => (
    <li key={e.id}>
      {e.name}: &nbsp; <b>{e.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className={styles.linkCategory}>{title}</h3>
      <ol className={styles.listItem}>{listItems}</ol>
    </>
  );
}
List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

export default List;
