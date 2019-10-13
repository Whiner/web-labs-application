/* eslint-disable */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('#hide')
    .click(() => {
        $('.mso-normal')
            .each((index, v) => {
                if (index % 2 !== 0) {
                    v.style.display = 'none';
                }
            });
    });

$('#show')
    .click(() => {
        $('.mso-normal')
            .each((index, v) => {
                if (index % 2 !== 0) {
                    v.style.display = null;
                }
            });
    });

const form = $('#form');
form.keypress(() => {
    form.css('background-color', 'rgb('
        + getRandomInt(0, 256) + ','
        + getRandomInt(0, 256) + ','
        + getRandomInt(0, 256) + ')',
    );
});

let i = 0;

$('#show-p')
    .click(() => {
        const pElements = $('.p-element');
        let startValue;
        if (i % 2 === 0) {
            startValue = 0;
        } else {
            startValue = 1;
        }
        i++;
        showP(pElements, 0, startValue);
    });

function showP(list, index, value) {
    list[index].style.opacity = value;
    index++;
    if (list.length > index) {
        setTimeout(() => {
            if (value === 0) {
                showP(list, index, 1);
            } else {
                showP(list, index, 0);
            }

        }, 200);
    }
}

let j = 0;

$('#show-image')
    .click(() => {
       $('.image')
            .each((index, v) => {
                if (index % 2 !== 0) {
                    v.style['z-index'] = -1;
                    let top;
                    if(j % 2 === 0) {
                        top = '-100px';
                    } else {
                        top = '0px';
                    }
                    $(v)
                        .animate(
                            {
                                top,
                            },
                            {
                                duration: 'slow',
                            },
                        );
                }
            });
        j++;
    });
