let isDOBopen = false;
let DOB;
const iconcontent = document.getElementById('icon');
const buttoncontent = document.getElementById('contents');
const beforeDOB = document.getElementById('beforeDOB');
const afteraddDOB = document.getElementById('afteraddDOB');
const addbutton = document.getElementById('addbutton');
const dateinput = document.getElementById('dateinput')
const yearEL = document.getElementById('year');
const monthEL = document.getElementById('month');
const dayEL = document.getElementById('days');
const hourEL = document.getElementById('hour');
const minuteEL = document.getElementById('minute');
const secondEL = document.getElementById('second');

const makeTwodigitnumber = (number) =>
{
    return number > 9 ? number :`0${number}`;
}
const toggleDOBselector = ()=>
{
    if (isDOBopen)
     {
        buttoncontent.classList.add("hide");
    }
    else {
        buttoncontent.classList.remove("hide");
    }
    isDOBopen =!isDOBopen;
}
const Updatetime = () => {
    const currenttime = new Date();
    const DOBdiff = currenttime - DOB;
    const year = Math.floor(DOBdiff / (1000 * 60 * 60 * 365 * 24));
    const month = Math.floor(DOBdiff / (1000 * 60 * 60 * 365))%12;
    const days = Math.floor(DOBdiff / (1000 * 60 * 60 * 365))%30;
    const hour = Math.floor(DOBdiff / (1000 * 60 * 60 ))%24;
    const minutes = Math.floor(DOBdiff / (1000 * 60 ))%60;
    const second = Math.floor(DOBdiff / 1000)%60;
    
    yearEL.innerHTML = makeTwodigitnumber(year);
    monthEL.innerHTML = makeTwodigitnumber(month);
    dayEL.innerHTML = makeTwodigitnumber(days);
    hourEL.innerHTML = makeTwodigitnumber(hour);
    minuteEL.innerHTML =makeTwodigitnumber( minutes);
    secondEL.innerHTML = makeTwodigitnumber(second);

};
const ContentshowSelector = () => {
    const DOBstring = dateinput.value;
    DOB = DOBstring ? new Date(DOBstring) : null;
    // const year = localStorage.getItem("year")
    // const month = localStorage.getItem("month")
    // const date = localStorage.getItem("date")
    // if (year && month && date)
    // {
    //     DOB = new Date(year,month,date)
    //     }
    if (DOB) {
        // localStorage.setItem("year", DOB.getFullYear())
        // localStorage.setItem("month", DOB.getMonth())
        // localStorage.setItem("date", DOB.getDate())
        beforeDOB.classList.add("hide");
        afteraddDOB.classList.remove("hide");
        setInterval(()=>Updatetime(),1000)
    }
    else {
        afteraddDOB.classList.add("hide");
        beforeDOB.classList.remove("hide")
    }
};
ContentshowSelector();



iconcontent.addEventListener("click", toggleDOBselector);
addbutton.addEventListener("click", ContentshowSelector);