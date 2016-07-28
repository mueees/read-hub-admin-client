class AddBookController {
    constructor(readBookManager) {
        Object.assign(this, {readBookManager});
    }
}

AddBookController.$inject = ['readBookManager'];

export default AddBookController;