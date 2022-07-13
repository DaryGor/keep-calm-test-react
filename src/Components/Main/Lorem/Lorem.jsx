import './Lorem.scss';
import MainTitle from './../../General/MainTitle';
import Article from '../Article/Article';
import img1 from './../../../images/lorem1.jpg';
import img1mbl from './../../../images/lorem1-mbl.jpg';
import img2 from './../../../images/lorem2.jpg';
import img2mbl from './../../../images/lorem2-mbl.jpg';
import {Picture} from "react-responsive-picture";

const articles = [
    {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    texts: [
        'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum/ Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
    ],
    class: "article--1"},
    {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    texts: [
        'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    ],
        class: "article--2"}
];
const images = [{
    src: img1,
    srcMbl: img1mbl,
    classWrapper: "lorem__wrapper--1",
    classImg: 'lorem__img--1'
}, {
    src: img2,
    srcMbl: img2mbl,
    classWrapper: "lorem__wrapper--2",
    classImg: 'lorem__img--2'
}]


const Lorem = (props) => {
    return (
        <div className={"lorem container"}>
            <MainTitle style={"lorem__title"}/>
            <div className={"lorem__grid"}>
                {articles.map((article, index) => {
                    return <Article title={article.title} texts={article.texts} id={index} key={index} addClass={article.class}/>
                })}
                {images.map((image) => {
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