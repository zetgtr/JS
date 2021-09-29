function non (event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    if (event < 1 || event > 4 ) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
return true
}

function exit(end){
    if (isNaN(end) || !isFinite(end)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    if (end <= 0 || end > 2 ) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
return true
}

var event, ok;
var answers = [];
answers.depozit = 0
do {
    c = 0
    x = 0
    do{
        ok = false
        event = +prompt(questions.q1 + questions.a1 + questions.b1 + questions.c1 + questions.d1 + "Введите правельный ответ:");
        ok = non (event)
        correct = 3
        if (correct == event){
            answers.depozit = 1000
            do {
                r = false
            end = prompt("Ваш выйгрыш состовляет: " + answers.depozit + "\nИграем дальше?\n 1 - Да\n 2 - Нет")
            if (end == 1){
                do{
                    ok = false
                    event = +prompt(questions.q2 + questions.a2 + questions.b2 + questions.c2 + questions.d2 + "Введите правельный ответ:");
                    ok = non (event)
                    correct = 1
                    if (correct == event){
                        answers.depozit = answers.depozit + 1500
                        do {
                            r = false
                        end = prompt("Ваш выйгрыш состовляет: " + answers.depozit + "\nИграем дальше?\n 1 - Да\n 2 - Нет")
                        if (end == 1){
                            do{
                                ok = false
                                event = +prompt(questions.q3 + questions.a3 + questions.b3 + questions.c3 + questions.d3 + "Введите правельный ответ:");
                                ok = non (event)
                                correct = 4
                                if (correct == event){
                                    answers.depozit = answers.depozit + 2500
                                    do {
                                        r = false
                                    end = prompt("Ваш выйгрыш состовляет: " + answers.depozit + "\nИграем дальше?\n 1 - Да\n 2 - Нет")
                                    if (end == 1){
                                        do{
                                            ok = false
                                            event = +prompt(questions.q4 + questions.a4 + questions.b4 + questions.c4 + questions.d4 + "Введите правельный ответ:");
                                            ok = non (event)
                                            correct = 2
                                            if (correct == event){
                                                answers.depozit = answers.depozit + 4000
                                                do {
                                                    r = false
                                                end = prompt("Ваш выйгрыш состовляет: " + answers.depozit + "\nИграем дальше?\n 1 - Да\n 2 - Нет")
                                                if (end == 1){
                                                    do{
                                                        ok = false
                                                        event = +prompt(questions.q5 + questions.a5 + questions.b5 + questions.c5 + questions.d5 + "Введите правельный ответ:");
                                                        ok = non (event)
                                                        correct = 1
                                                        if (correct == event){
                                                            answers.depozit = answers.depozit + 10000  
                                                            alert ("Позравляем вы выйграли: " + answers.depozit)
                                                            c = 5
                                                            x = 1
                                                            break;
                                
                                                    } else {
                                                        break;
                                                    }
                                                    }while(!ok)
                                                }
                                                if (end == 2){
                                                    c = 4
                                                    if(c == 4){
                                                        alert("Вы выйграли: " + answers.depozit)
                                                       }
                                                    break;
                                                }
                                                r = exit(end)
                                            }while(!r)
                                        } else {
                                            break;
                                        }
                                        }while(!ok)
                                    }
                                    if (end == 2){
                                        if(++c == 3){
                                            alert("Вы выйграли: " + answers.depozit)
                                           }
                                        break;
                                    }
                                    r = exit(end)
                                }while(!r)
                            } else {
                                break;
                            }
                            }while(!ok)
                        }
                        if (end == 2){
                            c = 2
                            if(c == 2){
                                alert("Вы выйграли: " + answers.depozit)
                               }
                            break;
                        }
                        r = exit(end)
                    }while(!r)
                } else {
                    break;
                }
                }while(!ok)
            }
            if (end == 2){
               if(++c == 1){
                alert("Вы выйграли: " + answers.depozit)
               }
               break;
            }
            r = exit(end)
        }while(!r)
    } else {
        break;
    }
    }while(!ok)
    res = true
    if (x == 0 && c == 0 ) {
        reg = prompt("Вы проиграли. Попробовать снова?\n\n 1 - да\n 2 - нет")
        if (reg == 1) {
            res = false
        }
        if (reg == 2){
            break;
        }
    }
}while(!res)
