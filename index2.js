$(".mouseover").on("mouseenter",event=>{
    $(event.currentTarget).next().fadeIn();
});

$(".mouseover").closest(".nav").on("mouseleave",event=>{
    $(event.currentTarget).find(".dropdown-menu").slideUp();
});