let app = new Vue ({
    el: '#root',
    data: {
        imageSources: [
            "https://i.pinimg.com/originals/ca/ca/aa/cacaaa6ed79406c476d60a60441ca502.jpg",
            "https://www.traghettiper-ponza-ventotene.it/wp-content/uploads/2018/12/ponza-i-panorami.jpg",
            "https://www.costasmeralda.it/wp-content/uploads/2019/09/thumbnail-1-1300x796.jpg",
            "https://ilconfronto.eu/wp-content/uploads/2019/02/eremo-camaldoli.jpg",
            "https://dpv87w1mllzh1.cloudfront.net/alitalia_discover/attachments/data/000/001/700/original/3-Naples-8-places-to-visit-on-the-Amalfi-Coast-1270x720.jpg?1531229889"
        ],
        indexImage: 0,
        toggle: 'Stop',
        interval: ''
    },
    methods: {
        prevImg() {
            if (this.indexImage > 0) {
                this.indexImage--;
            } else {
                this.indexImage = this.imageSources.length - 1;
            }
            // Stessa cosa con ternario
            // this.indexImage == this.imageSources.length - 1 ? this.indexImage = 0 : this.indexImage++;
        },
        nextImg() {
            if (this.indexImage < this.imageSources.length - 1) {
                this.indexImage++;
            } else {
                this.indexImage = 0;
            }
            // Stessa cosa con ternario
            // this.indexImage == this.imageSources.length - 1 ? this.indexImage = 0 : this.indexImage++;
        },
        changeImg(index) {
            this.indexImage = index - 1;

            // // identifico il cerchio cliccato
            // const selectedCircle = event.target;
            // console.log(selectedCircle);
            //
            // // prendo l'array di cerchi
            // const circleArray = document.getElementsByClassName('fa-circle');
            // console.log(circleArray);
            //
            // // prendo líndice del cerchio cliccato dall'array di cerchi
            // let selectedIndex;
            // for(let i = 0; i < circleArray.length; i++) {
            //     if (circleArray[i] == selectedCircle) {
            //         selectedIndex = i;
            //     }
            // }
            // console.log(selectedIndex);
            //
            // // imposto indexImage uguale all'indice appena ricavato
            // this.indexImage = selectedIndex;
        },
        autoPlay() {
            let instance = this;
            this.interval = setInterval(() => {
                instance.nextImg();
            }, 2000);
            console.log(this.interval);
        },
        toggleAutoplay() {
            if(this.toggle == 'Stop') {
                this.toggle = 'Play';
                clearInterval(this.interval);
            } else {
                this.toggle = 'Stop';
                this.autoPlay();
            }
        },
        stopAutoplay() {
            clearInterval(this.interval);
        },
        playAutoplay() {
            this.autoPlay();
        }
    },
    created() {
        this.autoPlay();
    }
});
