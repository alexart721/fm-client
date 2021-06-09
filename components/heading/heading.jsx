import css from './heading.module.scss';

const Heading = ({ title, color }) => (
  <h1 className={css.heading}>
    { title }
    <style jsx>
      {`
        color: ${color};
      `}
    </style>
  </h1>
);

export default Heading;
