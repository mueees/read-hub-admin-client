import angular from 'angular';

import utils from '../../utils/uitls.module';

import TinymceEditorDirective from './tinymce-editor.directive';

const tinymceEditor = angular.module('read.component.tinymce-editor', [
    utils
]);

tinymceEditor
    .directive('readTinymceEditor', TinymceEditorDirective);

export default tinymceEditor.name;