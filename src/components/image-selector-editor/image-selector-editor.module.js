import angular from 'angular';

import ImageSelectorEditorDirective from './image-selector-editor.directive';

const imageSelectorEditor = angular.module('read.component.image-selector-editor', []);

imageSelectorEditor
    .directive('readImageSelectorEditorDirective', ImageSelectorEditorDirective);

export default imageSelectorEditor.name;