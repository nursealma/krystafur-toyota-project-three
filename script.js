$(document).ready(function(){



// everything inside tarot object
    const tarot = {
// array of cards as property of object
        
            cards: [
                '00_Fool.jpg" alt="the fool"',
                '01_Magician.jpg" alt="the magician"',
                '02_High_Priestess.jpg" alt="the high priestess"',
                '03_Empress.jpg" alt="the empress"',
                '04_Emperor.jpg" alt="the emperor"',
                '05_Hierophant.jpg" alt="the heirophant"',
                '06_Lovers.jpg" alt="lovers"',
                '07_Chariot.jpg" alt="chariot"',
                '08_Strength.jpg" alt="strength"',
                '09_Hermit.jpg" alt="the hermit"',
                '10_Wheel_of_Fortune.jpg" alt="wheel of fortune"',
                '11_Justice.jpg" alt="justice"',
                '12_Hanged_Man.jpg" alt="the hanged man"',
                '13_Death.jpg" alt="death"',
                '14_Temperance.jpg" alt="temperance"',
                '15_Devil.jpg" alt="the devil"',
                '16_Tower.jpg" alt="tower"',
                '17_Star.jpg" alt="the star"',
                '18_Moon.jpg" alt="the moon"',
                '19_Sun.jpg" alt="the sun"',
                '20_Judgement.jpg" alt="judgement"',
                '21_World.jpg" alt="the world"'
                ],



//init method kicks off chain of functions, firstly 'shuffle'
            init: function() {
                tarot.shuffle();
            },

            shuffle: function() {
//shuffle method runs through the length of the array and re-orders them (method taken from youtube 'shuffling an array' tutorial NOTE: i can't quite wrap my head around how this works, but in this application it works)
                let random = 0;
                let temp = 0;
                for(i = 1; i < tarot.cards.length; i++) {
                    random = Math.round(Math.random() * i);
                    temp = tarot.cards[i];
                    tarot.cards[i] = tarot.cards[random];
                    tarot.cards[random] = temp;
                 
                }
//assignCards method is called after shuffle is completed
                tarot.assignCards();
            },
//assignCards is defined, each element with "card" class is iterated over and give an attribute of "data-card-value:" and index number
            assignCards: function(){
                $('.card').each(function(index){
                    $(this).attr('data-card-value', tarot.cards[index]);


                    // attempt to attach alt tags in different way:
//                     $(this).attr('data-card-alt', tarot.alt[index])
                });



//click events are then called once data-card-value attribute has been assigned

                tarot.clickEvents();
             
            },

//click handler waits for click event on .card elements, on click the html is updated with image element and filetype enveloping name of array item (which is named the same as the image). "unselected" is dormant class on all .card elements, which is then removed and replaced with 'selected'. NOTE: javascript automatically changes data-card-value to cardValue


            clickEvents: function(){
                $('.card').on('click', function() {
                    $(this).html('<img src="./assets/' + $(this).data('cardValue') + ">"); 
                    // console.log($(this).data('cardValue'));     
                    $(this).removeClass('unselected').addClass('selected');
                    console.log($('.selected').length)
                    //conditional statement checks to see if amount of items with a class of .selected is three, if so the other elements are removed from mark up and the three selected items grow in size
                    $(this).fadeIn(function(){
                        if ($('.selected').length === 3) {  
                            $('.unselected').css("display", "none");
                            // $('.container').css("background-color", "white");
                            $('.selected').animate({ width: '300px',
                                                     height: '500px',
                                                     opacity: '1'
                                                    })  
                            document.getElementById("audio").play();
                            }
                        })
                });
// the following listens for the return key to be pressed which will trigger the equivlent of a 'click' on the card, each .card div is given a zero based tab index
                $('.card').keydown(function(event){ 
                    let keyCode = (event.keyCode ? event.keyCode : event.which);   
                    if ((event.keyCode || event.which) == 13) {
                        console.log(this);
                        $(this).trigger('click');
                    }       
                });
            }            
    };

//all of the above relies on the following to begin the call chain.
        tarot.init()




});
