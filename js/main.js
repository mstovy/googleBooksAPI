const app = Vue.createApp({
    el: "app",
    data() {
        return {
            keyword: null,
            newSearch: [],
            result: null,
            start: 0,
            max: 20,
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex=" + this.start + "&maxResults=" + this.max)
                .then(response => response.json())
                .then(json => this.result = json)
        },
        checkIfTooFarLeft() {
            if (this.start == 0) {
                return false;
            }
            else {
                return true;
            }
        },
        checkIfTooFarRight() {
            if (this.start + 40 >= this.result.totalItems) {
                return false;
            }
            else {
                return true;
            }
        },
        pageRight() {
            this.start = this.start + 20;
            this.searchGoogleBooks();
        },
        pageLeft() {
            this.start = this.start - 20;
            this.searchGoogleBooks();
        },
        addSearch() {
            if (!this.keyword) {
                return;
            }
            this.newSearch.push(this.keyword);
            this.keyword = '';
            this.saveSearch();
        },
        removeSearch(x) {
            this.newSearch.splice(x, 1);
            this.saveSearch();
        },
        saveSearch() {
            const parsed = JSON.stringify(this.newSearch);
            localStorage.setItem('newSearch', parsed);
        },
        displaySearch() {
            var x = document.getElementsById("hover");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    },
    mounted() {
        if (localStorage.getItem('newSearch')) try {
            this.newSearch = JSON.parse(localStorage.getItem('newSearch'));
        } catch (e) {
            localStorage.removeItem('newSearch');
        }
    }
})
