import styles from './App.module.css';
import Main from './component/Main';
import '@dtsl/css-design-tokens/dist/index.min.css';

function App() {
  return (
    <div className={styles.App}>
        <Main />
    </div>
  );
}

export default App;
