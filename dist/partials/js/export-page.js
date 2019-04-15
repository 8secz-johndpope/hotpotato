
function openLink(){
    var hotPotatoLink, link;
    if (urlParams.get('hotPotatoLink') !== undefined) {
        hotPotatoLink = urlParams.get('hotPotatoLink');
        link = "https://video.hotpotato.me/watch?v="+hotPotatoLink;
    } else if ( document.getElementById('openLink').getAttribute('data-href') !== undefined ) {
        link = document.getElementById('openLink').getAttribute('data-href');
    }
    window.location.assign( link );
}

function backToTool(){
    window.location="http://www.hotpotato.me/index.html";
}
function postToFeed(){
    //window.location="http://leonhaggarty.me/staging-hotpotato/hybridauth/authpage-facebook.php";
}

$(document).ready(function(){
    //setTimeout(function () {
    $("#copy-button").click(function() {
        var copyText = document.getElementById("OutputYouTubeLink");
        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        document.execCommand("copy");
        $('#copy-button-text').html('Link Copied');
        $('this').addClass('active');
        // console.log( copyText.value );
    });
    //});

});
