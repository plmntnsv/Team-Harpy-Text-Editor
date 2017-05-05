import { requester } from 'requester';

export function getSavedFiles(categoryName) {
    let url = `/saved-files/data/categories/${categoryName}`;
    return firebase.database().ref(url).once('value');
}

export function getSavedFile(fileName, categoryName) {
    let url = `/saved-files/data/categories/${categoryName}/files/${fileName}`;
    return firebase.database().ref(url).once('value');
}

export function postSaveFile(categoryName, file) {
    let url = `/saved-files/data/categories/${categoryName}/files/`;
    let updates = {};
    updates[url + file._name] = file;
    return firebase.database().ref().update(updates);
}

export function deleteFile(fileName, categoryName) {
    console.log(fileName);
    console.log(categoryName);
     let url = `/saved-files/data/categories/${categoryName}/files/${fileName}`;
    return firebase.database().ref(url).remove();
}

export function getCategories() {
let url = "/saved-files/data/";
    return firebase.database().ref(url).once('value');
}

export function postCategory(category, file) {
    let url = "/saved-files/data/categories/";
    let updates = {};
    updates[url + category._name + "/category/"] = category;
    updates[url + category._name + "/files/" + file._name] = file;
    return firebase.database().ref().update(updates);
}

export function postUser(params) {

}

export function getUsers(params) {

}