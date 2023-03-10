import css from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <p className={css.text}>Developed by aventinodev</p>
      </div>
    </footer>
  );
};
export default AppFooter;
