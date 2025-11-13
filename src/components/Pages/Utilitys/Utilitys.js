

const getBookStore = () =>{
    const storedBookStr = localStorage.getItem('readList');
    if(storedBookStr){
        const storeData = JSON.parse(storedBookStr);
        return storeData;
    }
     else{
        return [];
     }
}



const addToStoreBD = (id) =>{
    const storeBook = getBookStore();
    if(storeBook.includes(id)){
        alert('Book already added');
    }
    else{
        storeBook.push(id);
        console.log(storeBook);
        localStorage.setItem('readList',JSON.stringify(storeBook));
    }
}

export {getBookStore, addToStoreBD};