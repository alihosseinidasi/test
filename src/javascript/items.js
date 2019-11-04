
$(document).ready(function () {

    $('.breadcrumb').css('margin-top', document.getElementsByTagName("header")[0].offsetHeight + 'px');
    $(document).on("click", ".item", function () {
        let categoryId = $(this).attr('data-categoryId');
        let itemId = $(this).attr('data-itemId');
        navigateToItem(categoryId, itemId);
    });
    loadItemsHtml();

});


function loadItemsHtml() {

    $(".container").empty();
    let category = getCategoryData();
    $('.container-header h2').text("Top " + category.categoryName);

    let itemsHtml = '';
    for (var i = 0; i < category.items.length; i++) {
        itemsHtml += "<div class='item' data-categoryId = " + category.categoryId  + " " + "data-itemId=" + category.items[i].itemId + " >" +
            "<img src='" + category.items[i].photos[0].source + "' alt='" + category.items[i].photos[0].alt + "' />" +
            "<span class='text-bold'>" +
            "<a href='item.html?categoryId=" + category.categoryId + "&&itemId=" + category.items[i].itemId + "'>" + category.items[i].name + "</a>" +
            "</span>" +
            "</div>";
    }
    console.log(itemsHtml);

    $(".container").append(itemsHtml);
}


function getCategoryId() {
    var path = document.location.href;
    var url = new URL(path);
    var categoryId = url.searchParams.get("categoryId");
    return categoryId;
}

function getCategoryData() {
    let categoryId = getCategoryId();
    for (var i = 0; i < categories.data.length; i++) {
        if (categoryId == categories.data[i].categoryId) {
            return categories.data[i];
        }
    }
}

function navigateToItem(categoryId, itemId) {
    window.location.href = applicationPath + "item.html?categoryId=" + categoryId + "&&itemId=" + itemId;
}

