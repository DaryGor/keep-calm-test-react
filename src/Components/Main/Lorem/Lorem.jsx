import './Lorem.scss';
import MainTitle from './../../General/MainTitle';
import Article from '../Article/Article';
import {Picture} from "react-responsive-picture";

const Lorem = (props) => {
    return (
        <div className={"lorem container"}>
            <MainTitle style={"lorem__title"}/>
            <div className={"lorem__grid"}>
                {props.state.articles.map((article, index) => {
                    return <Article title={article.title} texts={article.texts} id={index} key={index} addClass={article.class}/>
                })}
                {props.state.images.map((image) => {
                    return <div className={image.classWrapper}>
                        <Picture className={image.classImg}
                                 sources = {[
                                     {
                                         srcSet: image.srcMbl,
                                         media: "(max-width: 420px)",
                                     },
                                     {
                                         srcSet: image.src,
                                     }
                                 ]}
                        />
                    </div>
                })}
            </div>
        </div>
    );
}

export default Lorem;