function ListTagDirective(readTagManager) {
    return {
        restrict: 'E',
        template: require('./list-tag.html'),

        scope: {
            readConfiguration: '='
        },

        link: function ($scope) {
            $scope.tags = [];

            $scope.addTags = function (tags) {
                if (!_.isArray(tags)) {
                    tags = [tags];
                }

                $scope.tags = $scope.tags.concat(tags);
            };

            $scope.deleteTag = function (id) {
                if (window.confirm('Are you sure?')) {
                    readTagManager.delete(id).then(function () {
                        _.remove($scope.tags, {
                            _id: id
                        });
                    });
                }
            };

            $scope.saveTag = function (id, newTagName) {
                let tag = _.find($scope.tags, {
                    _id: id
                });

                tag.name = newTagName;

                this.tagSettings.state = 'read';

                readTagManager.save(tag);
            };

            $scope.readConfiguration.tagStream.subscribe($scope.addTags);

            $scope.switchToEditState = function () {
                this.tagSettings.state = 'edit';
            };

            $scope.switchToReadState = function () {
                this.tagSettings.state = 'read';
            }
        }
    }
}

ListTagDirective.$inject = ['readTagManager'];

export default ListTagDirective;