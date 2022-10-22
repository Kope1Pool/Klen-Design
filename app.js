const tabsBtn = document.querySelectorAll(".offers-btn");


tabsBtn.forEach(function(item){
    item.addEventListener("click", function() {
        let currentBtn = item;

        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });

        currentBtn.classList.add('active')
    });
});



