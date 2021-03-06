var flairs = [
    { "id": "1", "name": "Discussion" },
    { "id": "2", "name": "Question" },
    { "id": "3", "name": "Reaction" },
    { "id": "4", "name": "OC Fanart" },
    { "id": "5", "name": "Found Fanart" },
    { "id": "6", "name": "Music" },
    { "id": "7", "name": "Video" },
    { "id": "8", "name": "IRL Media" },
	{ "id": "k", "name": "OC Edited Media" },	
    { "id": "9", "name": "Found Edited Media" },
    { "id": "a", "name": "Poetry" },
    { "id": "b", "name": "Fanfic" },
    { "id": "c", "name": "Custom Dialogue" },
    { "id": "d", "name": "News" },
    { "id": "e", "name": "Meta" },
    { "id": "f", "name": "Fun" },
    { "id": "g", "name": "Misc" },
    { "id": "h", "name": "Gameplay" },
    { "id": "i", "name": "Game Mod" },
    { "id": "j", "name": "Poetry (on /new only)" }
];

function update_link() {
    var lang_name = "";
    $("[type='checkbox']").each(function(id, checkbox) {
        if(!$(checkbox).is(":checked")) {
            lang_name += $(checkbox).prop("id");
        }
    });
    $("[type='checkbox']:checked").each(function() {
        $(this).prop('disabled', lang_name.length == 3);
    });
    lang_name = ("0000"+lang_name).substring(lang_name.length);
    lang_name = lang_name.substring(0, 2) + "-" + lang_name.substring(2, 4);

    if(lang_name === "00-00") {
        lang_name = "www";
    }
    
    link = '<a href="https://' + lang_name + '.reddit.com/r/DDLC">Filter</a>';
    $(".link-button").html(link);
}

$(function() {
    flairs.forEach(function(flair) {
        $(".checkbox-area").append('<div class="filter-checkbox"><input type="checkbox" id="'+flair["id"]+'" checked></input><label for="'+flair["id"]+'">'+flair["name"]+'</label></div>');
    });
    update_link();    

    $("[type='checkbox']").change(update_link);

});