function ImageSelectorEditor() {
    return {
        restrict: 'E',
        template: require('./image-selector-editor.directive.html'),

        require: ['^form', 'ngModel'],

        scope: {},

        link: function ($scope, $element, attrs, controllers) {
            $scope.id = readGUID.generate('read-');
            $scope.form = controllers[0];

            let ngModel = controllers[1];
            let tinymceEditor;

            ngModel.$formatters.push(function (modelValue) {
                return modelValue;
            });

            // wait until ID for div be rendered
            $timeout(function () {
                tinymce.init({
                    selector: '#' + $scope.id,
                    plugins: ['paste', 'link', 'autoresize'],
                    inline: true,

                    setup: function (editor) {
                        tinymceEditor = editor;

                        editor.on('change', function () {
                            ngModel.$setViewValue(editor.getContent());
                        });
                    },

                    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
                }).then(function (editor) {
                    tinymceEditor.setContent(ngModel.$viewValue);
                });
            });
        }
    }
}

ImageSelectorEditor.$inject = [];

export default ImageSelectorEditor;