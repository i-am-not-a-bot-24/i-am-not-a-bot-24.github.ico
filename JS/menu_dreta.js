(function(){
    const listElements = document.querySelectorAll('item-show');
    const list = document.querySelector('.menu');
    const menu = document.querySelector('.menu-btn');

    const addClick = () => {
        listElements.forEach(element =>{
            element.addEventListener('click', () =>{
                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu-active');

                console.log(subMenu.clientHeight);
            });
        });
    }

    addClick();
})();