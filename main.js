

// comming out from left
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// comming out from right
const observerRight = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showRight');
        } else {
            entry.target.classList.remove('showRight');
        }
    });
});

const hiddenElementsRight = document.querySelectorAll('.fromRight')
hiddenElementsRight.forEach((el) => observerRight.observe(el));


//From Buttom

const observerBottom = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showButtom');
        } else {
            entry.target.classList.remove('showButtom');
        }
    });
});

const hiddenElementsBottom = document.querySelectorAll('.fromButtom');
hiddenElementsBottom.forEach((el) => observerBottom.observe(el));

