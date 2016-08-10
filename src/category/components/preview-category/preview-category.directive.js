function PreviewCategoryDirective() {
    return {
        restrict: 'E',
        template: require('./preview-category.html'),

        scope: {
            readConfiguration: '='
        }
    }
}

export default PreviewCategoryDirective;