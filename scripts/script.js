const container = document.querySelector('.container');
const squareBody = document.querySelector('.square-body');

container.addEventListener('click', (event) => {
    const block = squareBody.querySelectorAll('.block');
        block.forEach((item, index) => {

            if (event.target.closest('.left') && index > 0) {
                if (event.target.closest('div.block') == item) {
                    block[index - 1].before(block[index]);
                }
            }

            if (event.target.closest('.right') && index < 24) {
                    if (event.target.closest('div.block') == item) {
                        block[index + 1].after(block[index]);
                    }
            }

            if (event.target.closest('.top') && index > 4) {
                    if (event.target.closest('div.block') == item) {
                        block[index - 5].before(block[index]);
                        block[index + 1].before(block[index - 5]);
                    }
            }

            if (event.target.closest('.bottom')  && index < 20) {
                    if (event.target.closest('div.block') == item) {
                        block[index + 5].before(block[index]);
                        block[index + 1].before(block[index + 5]);
                    }
            }

            if (event.target.closest('.btn-reset')) {
                block.forEach((elem) => {
                    if (elem.innerText == (index + 1)) {
                        squareBody.append(elem);
                    }

                });

            }

        });
});