import React, {Component} from 'react';

export default class App extends Component {
    render() {
        var artwork = ["","http://www.georgiaokeeffe.net/images/paintings/oriental-poppies.jpg",
                        "http://i344.photobucket.com/albums/p339/forestandfilament/Nature/6abd24dd-2f81-4a6b-adc2-e300ff48a15a.jpg",
                        "https://www.nationalgallery.org.uk/upload/img/Rembrandt-self-portrait-age-63-NG221-c-face-half.jpg",
                        "http://www.wallcoo.net/paint/sargent_john_singer_02/images/Sargent_John_Singer_Scuola_di_San_Rocco.jpg",
                        "http://claydonfinearts.com/graphics/stipple-eyes.jpg",
                        "http://www.agotaspages.com/graphics/photo_art/impressionists/impressionism/images/starynight_vangogh.jpg",
                        "http://julesmrsic.com/abstract/wp-content/uploads/2015/02/Abstract-Art.jpg",
                        "http://www.friendsocial.net/uploads/images/cover/Edgar_Degas_Paintings.jpg",
                        "http://framingpainting.com/UploadPic/Thomas%20Kinkade/big/Stillwater%20Cottage.jpg",];

        var color = ["red", "complementary colors", "blue", "primary colors", "green",
                        "yellow", "realistic", "you pick", "black & white", "5 or more"];

        var medium = ["pencil", "marker", "colored pencil", "paint", "you pick",
                        "mixed media", "charcoal", "crayon", "chalk", "photograph"];

        var subject = ["trash", "something shiny", "building", "tool", "plant",
                        "food", "landscape", "water", "you pick", "sky"];


        var min = 10000;
        var max = 99999;
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        var artworkIndex = parseInt(number.toString()[0]);
        var colorIndex = parseInt(number.toString()[1]);
        var mediumIndex = parseInt(number.toString()[2]);
        var subjectIndex = parseInt(number.toString()[2]);
        return (
            <div>
                <img src={artwork[artworkIndex]} height="100px"/>
                <h3>Color: {color[colorIndex]}</h3>
                <h3>Medium: {medium[mediumIndex]}</h3>
                <h3>Subject: {subject[subjectIndex]}</h3>
            </div>
        );
    }
}