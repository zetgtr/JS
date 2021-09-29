//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);

if (event == 1) {
    m = works.a1

}else{

    m = works.a2
}
answers.mas1 = answers.unshift(works.a00 + "\nВаш ответ: \n" + m)

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        if (event == 1) {
            m = works.b1
        }else{
            m = works.b2
        }
        answers.mas2 = answers.unshift(works.b00 + "\nВаш ответ: \n" + m)
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
              
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                if (event == 1) {
                    m = works.d1
                }else{
                    m = works.d2
                }
                answers.mas3 = answers.unshift(works.d00 + "\nВаш ответ: \n" + m)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        if (event == 1) {
            m = works.c1
        }else{
            m = works.c2
        }
        answers.mas4 = answers.unshift(works.c00 + "\nВаш ответ: \n" + m)
        switch (event) {
            case 1: // Второе действие
            
                
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                if (event == 1) {
                    m = works.d1
                }else{
                    m = works.d2
                }
                answers.mas5 = answers.unshift(works.d00 + "\nВаш ответ: \n" + m)
                
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;

    default:
        alert('Ошибка');
}
if (event == -1){
alert ("До свидания!")
}

if (event != -1) {
    do {
    rezultat = false
    x = prompt('Хотите посмотреть результаты?\n 1 - да\n 2 - нет');
    if (x == 1){
        n = +prompt("Введите номер от 1-3")
        if (n > 0 && n < 4){
            n - 1
            b = answers[answers.length - n]
            alert(b)
        }
    }
    if (x == 2){
        alert("Спасибо за игру!")
    }
    rezultat = isRezultat(x)
} while(!rezultat);
}

//------------------------------------------

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function isRezultat(x){
    if (isNaN(x) || !isFinite(x)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }

    if (x <= 0 || x > 2 ) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
return true
}
