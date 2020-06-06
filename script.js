$(document).ready(function(){
    const app = {
            cards: [
                '00_Fool',
                '01_Magician',
                '02_High_Priestess',
                '03_Empress',
                '04_Emperor',
                '05_Hierophant',
                '06_Lovers',
                '07_Chariot',
                '08_Strength',
                '09_Hermit',
                '10_Wheel_of_Fortune',
                '11_Justice',
                '12_Hanged_Man',
                '13_Death',
                '14_Temperance',
                '15_Devil',
                '16_Tower',
                '17_Star',
                '18_Moon',
                '19_Sun',
                '20_Judgement',
                '21_World'
                ],

            init: function() {
                app.shuffle();
            },

            shuffle: function() {
                let random = 0;
                let temp = 0;
                for(i = 1; i < app.cards.length; i++) {
                    random = Math.round(Math.random() * i);
                    temp = app.cards[i];
                    app.cards[i] = app.cards[random];
                    app.cards[random] = temp;
                }
                app.assignCards();
            },

            assignCards: function(){
                $('.card').each(function(index){
                    $(this).attr('data-card-value', app.cards[index]);
                });
                app.clickHandlers();
            },
            clickHandlers: function(){
                $('.card').on('click', function() {
                    $(this).html('<img src="./assets/' + $(this).data('cardValue') + '.jpg">');
                    $(this).removeClass('unselected').addClass('selected');
                    $(this).fadeIn(function(){
                    $('.unselected').fadeOut();
                    })
                                });
                    
            }
            
        };
        app.init()







    });
