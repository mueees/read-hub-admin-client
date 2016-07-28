import AddBookController from './add-book.controller';

function AddBookDirective() {
    return {
        restrict: 'E',
        template: require('./add-book.html'),
        controller: AddBookController
    }
}

export default AddBookDirective;