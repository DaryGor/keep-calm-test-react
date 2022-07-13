import "./Ipsum.scss";
import MainTitle from "../../General/MainTitle";
import Slider from "./Slider/Slider";

const Ipsum = (props) => {
  return (
    <div className={"ipsum"}>
      <MainTitle style={"ipsum__title"} />
      <Slider state={props.state} />
    </div>
  );
};

export default Ipsum;
