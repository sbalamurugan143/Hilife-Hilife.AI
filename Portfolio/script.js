window.addEventListener("scroll",reveal);
function reveal()
{
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++)
    {
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint)
        {
            reveals[i].classList.add('active');
        }

        else
        {
            reveals[i].classList.remove('active');


        }
}


}

window.addEventListener("scroll",card);

function card()
{
    var cards = document.querySelectorAll(".card");
    for(var i=0;i<cards.length;i++)
    {
        var windowheight = window.innerHeight;
        var cardtop = cards[i].getBoundingClientRect().top;
        var cardpoint = 50;
    }

    if(cardtop < windowheight - cardpoint)
    {
        cards[i].classList.add("card-ani");
    }

    else
    {
        cards[i].classList.remove("card-ani");
    }
}