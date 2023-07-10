import React from "react";
import Movie from "./Movie";
import One from './One.jpg';
import Mugen from './Mugen.jpg';
import Jujutsu from './Jujutsu.jpg';
import './Style.css';

export default class Main extends React.Component {
        render () {
            let movie1 = {
                name: 'One Piece Film: Red',
                details:'When pop idol Uta puts on her first-ever live performance, the Straw Hats cant pass up the chance to see her. But the mysterious singers Devil Fruit powers go far beyond music. Can Luffy and Shanks get through to her in time to keep their reality intact?',
                image: One,
                rated: 'PG-13',
                year: '2022',
                genre: 'Adventure/Action',
                length: '1h 55m'
               
             };
             let movie2 = {
                name: 'Demon Slayer:Kimetsu no Yaiba-The Movie:Mugen Train',
                details: 'Tanjiro and his group arrive to their next mission on the Mugen Train, where people have been going missing. The group joins one of the most powerful swordsmen within the Demon Slayer Corps, Flame Hashira Kyojuro Rengoku.',
                image: Mugen,
                rated: 'R',
                year: '2020',
                genre: 'Fantasy/Action',
                length: '1h 57m'
             };
             let movie3 = {
                name: 'Jujutsu Kaisen 0',
                details: '16-year-old Yuuta, a victim of high school bullying, is plagued with a powerful curse. Which catches the attention of a powerful sorcerer, Satoru Gojo who teaches at the mysterious Tokyo Jujutsu High.',
                image: Jujutsu,
                rated: 'PG-13',
                year: '2021',
                genre: 'Fantasy/Action',
                length: '1h 45m'

             };

            return (
                <div>
                <h1>
                    Anime Movie Reviews
                </h1>
                <div>
                    <Movie{...movie1}></Movie>
                    <br></br>
                    <Movie{...movie2}></Movie>
                    <br></br>
                    <Movie{...movie3}></Movie>
                </div>
                </div>
            )
        }
    

}