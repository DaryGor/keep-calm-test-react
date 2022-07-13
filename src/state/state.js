import img1lorem from "../images/lorem1.jpg";
import img1mbl from "../images/lorem1-mbl.jpg";
import img2lorem from "../images/lorem2.jpg";
import img2mbl from "../images/lorem2-mbl.jpg";

import img1 from "../images/1.jpg";
import img1Max from "../images/img1-max.jpg";
import img2 from "../images/2.jpg";
import img2Max from "../images/img2-max.jpg";
import img3 from "../images/3.jpg";
import img3Max from "../images/img3-max.jpg";
import img4 from "../images/4.jpg";
import img4Max from "../images/img4-max.jpg";
import img5 from "../images/5.jpg";
import img5Max from "../images/img5-max.jpg";

let state = {
    loremPage: {
        articles: [
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
        ],
        images: [
            {
                src: img1lorem,
                srcMbl: img1mbl,
                classWrapper: "lorem__wrapper--1",
                classImg: 'lorem__img--1'
            }, {
                src: img2lorem,
                srcMbl: img2mbl,
                classWrapper: "lorem__wrapper--2",
                classImg: 'lorem__img--2'
            }]
    },
    ipsumPage: {
        slides: [
            {
                id: 1,
                srcMin: img1,
                srcMax: img1Max,
                className: '',
                texts: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                ],
                textMin: '',
            },
            {
                id: 2,
                srcMin: img2,
                srcMax: img2Max,
                className: '',
                texts: [],
                textMin: '',
            },
            {
                id: 3,
                srcMin: img3,
                srcMax: img3Max,
                className: '',
                texts: [],
                textMin: '',
            },
            {
                id: 4,
                srcMin: img4,
                srcMax: img4Max,
                className: '',
                texts: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                ],
                textMin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
                id: 5,
                srcMin: img5,
                srcMax: img5Max,
                className: 'slide--vertical',
                texts: [],
                textMin: 'Lorem ipsum dolor sit amet'
            },
            {
                id: 6,
                srcMin: img1,
                srcMax: img1Max,
                className: '',
                texts: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                ],
                textMin: '',
            },
            {
                id: 7,
                srcMin: img2,
                srcMax: img2Max,
                className: '',
                texts: [],
                textMin: '',
            },
            {
                id: 8,
                srcMin: img3,
                srcMax: img3Max,
                className: '',
                texts: [],
                textMin: '',
            },
            {
                id: 9,
                srcMin: img4,
                srcMax: img4Max,
                className: '',
                texts: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                ],
                textMin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
                id: 10,
                srcMin: img5,
                srcMax: img5Max,
                className: 'slide--vertical',
                texts: [],
                textMin: 'Lorem ipsum dolor sit amet'
            }
        ]
    }

}

export default state;