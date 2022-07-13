import './General.scss';

const MainTitle = (props) => {
    return (
        <h1 className={`general__title ${props.style}`}>
            Lorem ipsum dolor <span>sit</span> amet
        </h1>
    );
}

export default MainTitle;