Template.navbar.events({
    "keyup #search-value": function(event) {
        Session.set("searchValue", event.target.value);
    }
});

Template.website_list.events({
    "click .js-clear-search": function() {
        Session.set("searchValue", undefined);
        $("#search-value").val("");
    },
    
    "click .js-toggle-website-form": function() {
        if (Meteor.user()) {
            $("a.js-toggle-website-form").popover('hide');
            $("#website_form").modal('show');
        } else {
            $("a.js-toggle-website-form").popover('toggle');
        }
    }
});

Template.website_item.events({
    "click .goToDetails": function(event) {
        window.location = "/websites/" + this._id;
    },
    "click .js-upvote": function(event) {
        var that = this;
        if (Meteor.user()) {
            var id = Meteor.user()._id;
            if ($.inArray(id, that.upvotes) == -1) {
                Websites.update({_id: object._id}, {$push: {upvotes: userId}});
                Websites.update({_id: object._id}, {$set: {rate: Websites.findOne({_id: object._id}).upvotes.length + 1}});
                Websites.update({_id: object._id}, {$pull: {downvotes: userId}});
            }
            else {
                Websites.update({_id: object._id}, {$pull: {upvotes: userId}});
                Websites.update({_id: object._id}, {$set: {rate: Websites.findOne({_id: object._id}).upvotes.length - 1}});
            }
        }
        else {
            $('#upvote-'+object._id).popover('toggle');
        }
        return false;
    },
    "click .js-downvote": function(event) {
        var that = this;
        if (Meteor.user()) {
            var id = Meteor.user()._id;
            if ($.inArray(id, that.upvotes) == -1) {
                Websites.update({_id: that._id}, {$push: {downvotes: userId}});
                Websites.update({_id: that._id}, {$set: {rate: Websites.findOne({_id: that._id}).downvotes.length + 1}});
                Websites.update({_id: that._id}, {$pull: {upvotes: userId}});
            }
            else {
                Websites.update({_id: that._id}, {$pull: {downvotes: userId}});
                Websites.update({_id: that._id}, {$set: {rate: Websites.findOne({_id: that._id}).downvotes.length - 1}});
            }
        }
        else {
            $('#downvotes-' + that._id).popover('toggle');
        }
        return false;
    },
    "mouseover .js-upvote":function(event){
        var that = this;
        if (Meteor.user()){
            var userId = Meteor.user()._id;
            if ($.inArray(userId, that.upvotes) == -1 && $.inArray(userId, that.downvotes) == -1) {
                $('#upvote-' + that._id).attr('title', "Click to give an Up Vote.");
            }
            else if ($.inArray(userId, that.downvotes) != -1) {
                $('#upvote-' + that._id).attr('title', "You already voted a negative feedback. Click if you want to change your opinion.");
            }
            else {
                $('#upvote-' + that._id).attr('title', "You already Up voted. Click again to remove your vote.");
            }
        }
        else {
            $('#upvote-' + that._id).attr('title', "Please login to vote.");
        }	
    },
    "mouseover .js-downvote":function(event){
        var that = this;
        if (Meteor.user()){
            var userId = Meteor.user()._id;
            if ($.inArray(userId, that.downvotes) == -1 && $.inArray(userId, that.upvotes) == -1) {
                $('#downvote-' + that._id).attr('title', "Click to give an Down Vote.");
            }
            else if ($.inArray(userId, that.upvotes) != -1) {
                $('#downvote-' + that._id).attr('title', "You already voted a positive feedback. Click if you want to change your opinion.");
            }
            else {
                $('#downvote-' + that._id).attr('title', "You already Down voted. Click again to remove your vote.");
            }
        }
        else {
            $('#downvote-' + that._id).attr('title', "Please login to vote.");
        }	
    }
});

Template.website_detail.events({
    
});