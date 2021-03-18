app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
    `<ul class="col-sm-12 col-md-6 col-xl-4">
        <div v-if="bookObj.volumeInfo.title != undefined">
            <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{ this.bookObj.volumeInfo.title }}</a>
        </div>
        <div  v-if="bookObj.volumeInfo.subtitle != undefined">
            <li class="list-group-item"> Subtitle: {{ this.bookObj.volumeInfo.subtitle }}</li>
        </div>

        <div v-if="this.bookObj.volumeInfo.imageLinks != undefined" class = "d-flex justify-content-center">
            <img :src="this.bookObj.volumeInfo.imageLinks.thumbnail" alt="thumbnail">
        </div>
        <div v-else class = "d-flex justify-content-center">
            <img src="../nthumb.png" alt="thumbnailToo" >
        </div>

        <div v-if="bookObj.volumeInfo.authors != undefined">
            <li class="list-group-item" v-for="author in this.bookObj.volumeInfo.authors"> Author: {{ author }} </li>
        </div>
        <div  v-if="bookObj.volumeInfo.publisher != undefined">
            <li class="list-group-item"> Publisher: {{ this.bookObj.volumeInfo.publisher }}</li>
        </div>
        <div  v-if="bookObj.volumeInfo.publisher != undefined">
            <li class="list-group-item"> Published Date: {{ this.bookObj.volumeInfo.publishedDate }}</li>
        </div>
        <div  v-if="bookObj.volumeInfo.ratingsCount != undefined">
            <li class="list-group-item"> Rating: {{ this.bookObj.volumeInfo.ratingsCount }}</li>
        </div>
        <div  v-if="bookObj.volumeInfo.pageCount != undefined">
            <li class="list-group-item"> Page Count: {{ this.bookObj.volumeInfo.pageCount }}</li>
        </div>
        <div  v-if="bookObj.volumeInfo.description != undefined">
            <li class="list-group-item"> description: {{ this.bookObj.volumeInfo.description }}</li>
        </div>
    </ul>`,
    computed:{
        bookObj(){
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }

})
