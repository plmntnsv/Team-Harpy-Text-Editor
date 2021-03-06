import { templateLoader } from 'templateLoader';
import * as data from "data";

let $contentContainer = $("#contents-container");

export function get(fileName) {
    let publicFile;
    templateLoader.get('public-view')
        .then((template) => {
            let html = template;
            let context = data.getPublicFile(fileName)
                .then(function (snapshot) {
                    publicFile = snapshot.val();
                    let theCompiledHtml = html(publicFile);
                    $contentContainer.html(theCompiledHtml);
                }).then(() => {
                    let txtElement = $("#art-text-p");
                    txtElement.css("font-family", publicFile.fontFamily);
                    txtElement.css("font-size", publicFile.fontSize);
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                 });
        });
}
