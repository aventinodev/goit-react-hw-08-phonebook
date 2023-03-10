import css from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <p className={css.text}>Developed by aventinodev</p>
        <svg className="contact__icon" width="10" height="16">
          <use href="../../images/symbol-defs.svg#icon-smartphone"></use>
        </svg>
      </div>
    </footer>
  );
};
export default AppFooter;
