import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormInput = (props) => {
  return (
    <div className="FormDivMain">
      <label htmlFor={props.name}>
        <h4>{props.name}</h4>
      </label>
      <div className="FormDivElement">
        <span>
          <FontAwesomeIcon icon={props.spanIcon} size="lg" />
        </span>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
        />
      </div>
    </div>
  );
};
