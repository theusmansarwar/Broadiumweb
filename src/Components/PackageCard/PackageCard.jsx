import checkicon from "../../Assets/check.svg";
import "./PackageCard.css";
import { IoPlayForwardOutline } from "react-icons/io5";
import cardbg from '../../Assets/cardbg1.jpg';
const PackageCard = ({ name, price, features, vat, installation , type }) => {
  const style =
    type === "bundle"
      ? {
          backgroundColor: "white",
        }
      : {
          backgroundImage: `url(${cardbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
  return (
     <div className="package-card" style={style}>
      <div className="package-card-header">
        <p className="plan-title">
          {(() => {
            const words = name.match(/\b\w+\b/g); 
            if (!words || words.length === 0) return name;
            let wordIndex = 0;
            return name.split(/(\s+)/).map((part, index) => {
              if (/\b\w+\b/.test(part)) {
                wordIndex++;
                if (wordIndex === 2) {
                  return (
                    <span key={index} style={{ color: "var(--primary-color)" }}>
                      {part}
                    </span>
                  );
                }
              }
              return <span key={index}>{part}</span>;
            });
          })()}
        </p>
        <div className="card-left">
          <span className="price">{price} </span>
          <span className="month">per month</span>
        </div>
      </div>
      <ul className="features">
        {Array.isArray(features) ? (
          features.map((feature, index) => (
            <li key={index} className="feature-item">
              <img src={checkicon} /> {feature}
            </li>
          ))
        ) : (
          <li className="feature-item">No features available</li>
        )}
      </ul>
      <div className="installation">
        <span>
          {vat
            .split(" ")
            .map((word, index) =>
              word.includes("%") ? (
                <strong key={index}>{word} </strong>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
        </span>
        <span>{installation}</span>
      </div>
      <div className="bottom-area2">
        <div className="service-button-secondary">
          <IoPlayForwardOutline />
        </div>
      </div>
    </div>
  );
};
export default PackageCard;