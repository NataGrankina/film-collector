(function() {
    'use strict';

    angular
        .module('filmCollector')
        .factory('htmlParser', ['$document', 'lodash', 'config', service]);
        function service($document, _, config) {
            function retrieveFilmInfo(html) {
                var details = {};
                details.description = $($("p.item-decription.full", html)[0] || $("p.item-decription", html)[0]).text();
                details.yesVotesCount = parseInt($("div.b-tab-item__vote-value.m-tab-item__vote-value_type_yes", html).first().text());
                details.noVotesCount = parseInt($("div.b-tab-item__vote-value.m-tab-item__vote-value_type_no", html).first().text());
                var votesCount = details.yesVotesCount + details.noVotesCount;
                details.yesVotesPercentage = 100 * details.yesVotesCount / votesCount;
                details.noVotesPercentage = 100 * details.noVotesCount / votesCount;
                return details;
            }

        	function retrieveFoldersAndFiles(html) {
                var root = angular.element(html);
                var foldersAndFiles = [];

                $(">li.folder", html).each(function(index, item) {
                    var folder = retrieveFolderInfo(item);
                    foldersAndFiles.push(folder);
                });

                $(">li.b-file-new", html).each(function(index, item) {
                    var file = retrieveFileInfo(item);
                    foldersAndFiles.push(file);
                });

                return foldersAndFiles;
            }

            function retrieveFolderInfo(item) {
                var folder = {
                    type: "folder"
                };
                
                var a = $("a.title", item).first();
                folder.title = a.text().trim();
                folder.id = /[0-9]+/.exec(a.attr("rel"))[0];

                if ($(item).hasClass("folder-language"))
                    folder.language = folder.title;

                folder.details = "";
                var detailsSpans = $(">span.material-details", item).each(function(index, span) {
                    folder.details += $(span).text() + " ";
                });

                folder.date = $(">span.material-date", item).first().text();

                return folder;
            }

            function retrieveFileInfo(fileItem) {
                var file = {
                    type: "file"
                };

                var qualitySpan = $("span.video-qulaity", fileItem).get(0);
                if (qualitySpan)
                    file.quality = $(qualitySpan).text();

                file.title = "";
                var titleSpan = $("span.b-file-new__link-material-filename, span.b-file-new__material-filename", fileItem)
                    .first()
                    .find("span").each(function(index, span) {
                    file.title += $(span).text().trim() + " ";
                    });

                var reference = $("a.b-file-new__link-material", fileItem).get(0);
                if (reference) {
                    file.reference = config.filmHostUrl + $(reference).attr("href");
                }

                var downloadReference = $("a.b-file-new__link-material-download", fileItem).get(0);
                if (downloadReference) {
                    file.downloadReference = config.filmHostUrl + $(downloadReference).attr("href");
                    file.size = $("span.b-file-new__link-material-size", fileItem).first().text();
                }

                return file;
            }

        	return {
                retrieveFilmInfo: retrieveFilmInfo,
        		retrieveFoldersAndFiles: retrieveFoldersAndFiles
        	};
        }
})();
