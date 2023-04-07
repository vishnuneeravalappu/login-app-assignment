import "./style.css";

export const FormInput = (props) => {
  const alert = props.alert;
  return (
    <div className="FormInput">
      <label className="LoginLabel" for={props.id}>
        {props.label}
      </label>
      <input
        className="LoginInput"
        type={props.type}
        id={props.id}
        pattern={props.pattern}
        onBlur={props.onBlur}
      ></input>
      {alert && (
        <label className="LoginAlert" for={props.id}>
          {alert}
        </label>
      )}
    </div>
  );
};
