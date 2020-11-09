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
        indexImage: 0
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
        autoPlay() {
            let instance = this;
            setInterval(() => {
                if (instance.indexImage < instance.imageSources.length - 1) {
                    instance.indexImage++;
                } else {
                    instance.indexImage = 0;
                }
            }, 2000);
        }
    },
    created() {
        this.autoPlay();
    }
});
