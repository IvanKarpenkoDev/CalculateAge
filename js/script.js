
const years = document.querySelector('#years'),
      month = document.querySelector('#month1'),
      days = document.querySelector('#days'),
      btnCalculate = document.querySelector('button'),
      inputYears = document.querySelector('#year'),
      inputDays = document.querySelector('#day'),
      inputMonth = document.querySelector('#month');

btnCalculate.addEventListener('click', () =>{
    const date = new Date(`${inputMonth.value}.${inputDays.value}.${inputYears.value}`);
    const dateBirth = new Date('05.11.19');
    console.log();
    
    console.log(calculateAge(date.getDate(),date.getMonth(),date.getFullYear()));
    years.innerHTML = calculateAge(date.getDate(),date.getMonth(),date.getFullYear()).years;
    month.innerHTML = calculateAge(date.getDate(),date.getMonth(),date.getFullYear()).months;
    days.innerHTML = calculateAge(date.getDate(),date.getMonth(),date.getFullYear()).days;
});




function calculateAge(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    let monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    let daysDiff = currentDate.getDate() - birthDate.getDate();

    // Учтем случаи, когда месяц и день рождения еще не наступили в текущем месяце
    if (daysDiff < 0) {
        monthsDiff--;
        yearsDiff--;
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day);
        daysDiff = Math.floor((currentDate - lastMonth) / (1000 * 60 * 60 * 24));
    }

    // Учтем случаи, когда месяц рождения еще не наступил в текущем году
    if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
    }

    return {
        years: yearsDiff,
        months: monthsDiff,
        days: daysDiff
    };
}
