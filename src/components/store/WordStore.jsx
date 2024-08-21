import { makeAutoObservable } from "mobx"


class WordStore {
    words=[]
    error = null
    constructor(){
        makeAutoObservable(this)
    }

    loadData=()=>{
        fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then((response)=>{
            if (response.ok)
                {return response.json()}
            else{
                throw new Error('somethin went wrong')

             }
        })

        .then((response)=>
        this.words = response
        )

        .catch(error => this.error=error)
    }
}


const wordStore = new WordStore();
export default wordStore;

