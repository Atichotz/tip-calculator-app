const btnTip=document.querySelectorAll(".tip"),
inpBill=document.getElementById("inp-bill"),
inpPeople=document.getElementById("inp-people"),
cantBeZero = document.querySelector(".cb0"),
tipAmountPerson= document.querySelector(".tipAmount-price"),
inpCustom = document.getElementById("inp-custom"),
btnReset = document.querySelector('.btn-reset'),
totalPerson = document.querySelector('.totalPerson-price');

inpPeople.addEventListener('keydown',Calculate);
inpPeople.addEventListener('keydown',CheckPeople);

inpBill.addEventListener('keydown',Calculate);
inpBill.addEventListener('keydown',CheckPeople);

inpCustom.addEventListener('keydown',CheckPeople);
inpCustom.addEventListener('keydown',Calculate);
inpCustom.addEventListener('click',Customcheck);

btnReset.addEventListener('click',Cleardata);

btnTip.forEach(btn=>{
    btn.addEventListener('click',handleClick);
});

var tipPercent=15;
function Cleardata(){
    btnReset.classList.remove('active');
    inpBill.value = '';
    inpPeople.value = '';
    inpCustom.value = '';
    inpPeople.value = '';
    totalPerson.value = '';
    tipAmountPerson.value = '';

}
function handleClick(events){
    btnTip.forEach(btn=>{
        inpCustom.value='';
        btn.classList.remove('active-tip');
        if(events.target.innerHTML == btn.innerHTML){
            btn.classList.add('active-tip');
            tipPercent = btn.innerHTML;
        }
    });
}

function Customcheck(){
    btnTip.forEach(btn=>{
        btn.classList.remove('active-tip');
    });
}

function Calculate(events){
    if (events.code === "Enter"){
        if(isNaN(parseFloat(inpBill.value)) || isNaN(parseFloat(inpPeople.value))){
            console.log('Number of People cant be zero');
        }
        else{
            if(!isNaN(parseFloat(inpCustom.value))){
                btnReset.classList.add('active');
                var billvalues = parseFloat(inpBill.value).toFixed(2);
                var peopleValues = parseFloat(inpPeople.value).toFixed(2);
                var tipAmount = (billvalues*parseFloat(inpCustom.value))/100;
                tipAmountPerson.innerHTML = "฿" + tipAmount.toFixed(2);
                totalPerson.innerHTML = "฿" + (tipAmount/inpPeople.value).toFixed(2);
            }
            else{
                btnReset.classList.add('active');
                var billvalues = parseFloat(inpBill.value).toFixed(2);
                var peopleValues = parseFloat(inpPeople.value).toFixed(2);
                var tipAmount = (billvalues*parseFloat(tipPercent))/100;
                tipAmountPerson.innerHTML = "฿" + tipAmount.toFixed(2);
                totalPerson.innerHTML = "฿" + (tipAmount/inpPeople.value).toFixed(2);

                console.log(`People : ${peopleValues}`);
                console.log(`bill : ${billvalues}`);
                console.log(`Sum : ${tipAmount}`);
                console.log(`tipPercent : ${tipPercent}`);
            }
        }   
    }
}

function CheckPeople(events){
    if(events.code === "Enter"){
        if(isNaN(parseFloat(inpPeople.value)) || parseFloat(inpPeople.value) == 0 ){ //if values or num = 0
            inpPeople.classList.add('error');
            cantBeZero.classList.add('error');
        }
        else{
            inpPeople.classList.remove('error');
            cantBeZero.classList.remove('error');
        }
    }  
}
// console.log(btnTip)