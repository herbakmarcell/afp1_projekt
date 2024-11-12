export const FormInput = (props) => {
  return (
    <div className="FormDivElement">
      <span>
        <img src={props.iconSrc} alt={props.iconAlt} />
      </span>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
