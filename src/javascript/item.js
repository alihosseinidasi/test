$(document).ready(function () {
      
        $('.breadcrumb').css('margin-top', document.getElementsByTagName("header")[0].offsetHeight + 'px');
        var itemImage = getItemFirstImage(getItem());
        if(itemImage) {
            $(".item-image").attr("src", itemImage.source);
            $(".item-image").attr("photoId", itemImage.photoId);
        }

        $(".prev-image").click(function () {
            var previousImage = getPreviousImage(getItem(), $(".item-image").attr("photoId"));
            $(".item-image").attr("src", previousImage.source);
            $(".item-image").attr("photoId", previousImage.photoId);
        });
    
        $(".next-image").click(function () {
            var nextImage = getNextImage(getItem(), $(".item-image").attr("photoId"));
            $(".item-image").attr("src", nextImage.source);
            $(".item-image").attr("photoId", nextImage.photoId);
        });

        let item = getItem();
        $('.item-name').text(item.name);
    
        getUserReviewOfAnItem();
    });


function getItem() {
    var pageParameters = getPageParameters();
    for (var i = 0; i < categories.data.length; i++) {
        if (pageParameters.categoryId == categories.data[i].categoryId) {
            for (var j = 0; j < categories.data[i].items.length; j++) {
                if (pageParameters.itemId == categories.data[i].items[j].itemId) {
                    return categories.data[i].items[j];
                }
            }
        }
    }
}

function getNextImage(item, photoId) {
    if (item.photos && item.photos[photoId]) {
        return item.photos[photoId];
    }
    return item.photos[photoId - 1];
}

function getPreviousImage(item, photoId) {
    if (item.photos && item.photos[photoId - 2]) {
        return item.photos[photoId - 2];
    }
    return item.photos[photoId - 1];
}


function getItemFirstImage(item) {
    if (item && item.photos) {
        return item.photos[0];
    }
}

function getPageParameters() {
    var path = document.location.href;
    var url = new URL(path);
    var category = url.searchParams.get("categoryId");
    var item = url.searchParams.get("itemId");
    return { "categoryId": category, "itemId": item };
}

function getUserReviewOfAnItem() {
    $(".user-reviews").empty();

    var item = getItem();
    var reviewHtml = "";
    for (var i = 0; i < item.reviews.length; i++) {
        reviewHtml += "<p class = 'review-summary'>" + item.reviews[i].summary + "</p>" +
            "<p class = 'user-rating'>" + item.reviews[i].userRating + "</p>" +
            "<p class = 'review-user'>by <strong>" + item.reviews[i].userName +
            "</strong> <br/> on " + item.reviews[i].date + "</p>" +
            "<p>" + item.reviews[i].comments + "</p>" +
            "<hr class = 'line-spacing line-width-50' />";
    }

    console.log(reviewHtml);

    $(".user-reviews").append(reviewHtml);

}