document.getElementById('calculateBtn').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    if (!birthdayInput) {
        // Если дата рождения не введена
        errorElement.textContent = 'Пожалуйста, введите дату рождения.';
        errorElement.style.display = 'block';
        resultElement.textContent = '';
    } else {
        // Если дата рождения введена
        errorElement.style.display = 'none';

        const today = new Date();
        const birthday = new Date(today.getFullYear(), new Date(birthdayInput).getMonth(), new Date(birthdayInput).getDate());

        // Если день рождения уже прошел в этом году, установим его на следующий год
        if (birthday < today) {
            birthday.setFullYear(today.getFullYear() + 1);
        }

        const daysUntilBirthday = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

        // Определение правильного склонения для слова "день"
        let declension;
        if (daysUntilBirthday === 1) {
            declension = 'день';
        } else if (daysUntilBirthday >= 2 && daysUntilBirthday <= 4) {
            declension = 'дня';
        } else {
            declension = 'дней';
        }

        resultElement.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${declension}.`;
    }
});
