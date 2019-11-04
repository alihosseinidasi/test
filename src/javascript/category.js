$(document).ready(function () {

    $('.breadcrumb').css('margin-top', document.getElementsByTagName("header")[0].offsetHeight + 'px');
    $(document).on("click", ".category-item", function () {
        let categoryId = $(this).attr('data-categoryId');
        navigateToItems(categoryId);
    });
    loadCategoryHtml();

});

function loadCategoryHtml() {
    $(".category-container").empty();
    let categories = getCategories();
    console.log(categories);
    let categoriesHtml = '';
    for (var i = 0; i < categories.length; i++) {
        categoriesHtml += "<div class='category-item' data-categoryId =" + categories[i].categoryId  + " " +
        "style=\"background-image: url('" + categories[i].categoryPhoto + "');\">" +
        "<div>" + categories[i].categoryName + "</div>" +
        "</div>"; 
    }
    console.log(categoriesHtml);
    
    $(".category-container").append(categoriesHtml);
}

function navigateToItems(categoryId) {
    window.location.href = applicationPath + "items.html?categoryId=" + categoryId;
}

function getCategories() {
    return categories.data;
}
