import './Article.scss';

const Article = (props) => {
    return (
        <div className={ `article ${props.addClass}`}>
            <h3 className={"article__title"}> { props.title } </h3>
            {props.texts.map((text, index) => {
                return <p className={"article__text"}> { text }</p>
            })}
        </div>
    );
}

export default Article;