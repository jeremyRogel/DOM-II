// Your code goes here
const scaleUp = document.querySelectorAll('.img-content img');
scaleUp.forEach(item => {
  item.addEventListener('mouseenter', event => {
    item.style.transform = 'scale(1.3)';
    item.style.transition = ' transform 0.5s';
  })
});
const scaleDown = document.querySelectorAll('.img-content img');
scaleDown.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 0.5s';
  })
});

const takeMeToVenice = document.querySelector(".inverse-content img");
    takeMeToVenice.addEventListener('click', event => {
    window.location = "https://www.tripadvisor.com/Vacation_Packages-g187870-Venice_Veneto-Vacations.html";
    });

const takeMeThere = document.querySelector(".img-content img");
    takeMeThere.addEventListener('click', event => {
    window.location = "https://www.tripadvisor.com";
    });

const takeMeToHonduras = document.querySelector(".content-destination img");
    takeMeThere.addEventListener('click', event => {
    window.location = "https://www.tripadvisor.com/Vacation_Packages-g292016-Honduras-Vacations.html";
    });
    
const scaleUp2 = document.querySelectorAll('.home img');
    scaleUp2.forEach(item => {
        item.addEventListener('mouseenter', event => {
        item.style.transform = 'scale(1.3)';
        item.style.transition = ' transform 0.5s';
        })
    });
    
const scaleDown2 = document.querySelectorAll('.home img');
    scaleDown2.forEach(item => {
        item.addEventListener('mouseleave', event => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.5s';
      })
    });

 const takeMeToSun = document.querySelector(".destination btn");
    takeMeToSun.addEventListener('click', event => {
    window.location = "https://www.tripadvisor.com/Vacation_Packages-g499086-Sunny_Beach_Burgas_Province-Vacations.html";
    });

const takeMeToMountain = document.querySelector(".destination:nth-child(2) btn");
    takeMeToMountain.addEventListener('click', event => {
    window.location = "https://www.tripadvisor.com/Vacation_Packages-g143031-Great_Smoky_Mountains_National_Park_Tennessee-Vacations.html";
    });

const takeMeToIsland = document.querySelector(".destination:last-child btn");
    takeMeToIsland.addEventListener('click', event => {
    window.location = "https://www.tripadvisor.com/Vacation_Packages-g147417-Paradise_Island_New_Providence_Island_Bahamas-Vacations.html";
    });