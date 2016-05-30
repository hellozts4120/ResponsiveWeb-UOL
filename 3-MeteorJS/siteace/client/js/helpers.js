Template.navbar.helpers({
    inDetails: function() {
        if (Router.current().route.getName() == "websites") {
            return true;
        }
        else return false;
    }
});

Template.website_list.helpers({
	websites: function() {
        var searchValue = Session.get("searchValue");		
        var upvotes, downvotes;
        if (searchValue == undefined || searchValue == "" || searchValue == null) {
            return Website.find({}, {sort: {rate:-1}});
        }
        else {
            return Website.find(
                {$or: [{"title": {$regex : ".*"+searchValue+".*"}},
                       {"url": {$regex : ".*"+searchValue+".*"}},
                       {"description": {$regex : ".*"+searchValue+".*"}}
                      ]
                }, {sort:{rate:-1}});
            );
        }
    },
    searchOn: function() {
        var searchValue = Session.get("searchValue");
        if (searchValue == undefined || searchValue == "" || searchValue == null) {
            return false;
        }
        else return true;
    }
});

Template.website_item.helpers({
    totalUpvotes: function() {
        getVotedStatus(this);
        return this.upvotes ? this.upvotes.length : 0;
    },
    totalDownvotes: function() {
        getVotedStatus(this);
        return this.downvotes ? this.downvotes.length : 0;
    },
    getDate: function() {
        return this.createdOn ? this.createdOn.toString("dd-MM-yyyy") : false;
    },
    getAuthor: function(createdBy) {
        if (createdBy) {
            if (Meteor.users.findOne({_id: createdBy})){
                return Meteor.users.findOne({_id: createdBy}).username;
            }
            else {
                return "Default";
            }
        }
        else return "Default";
    },
    getLogo: function(url) {
        var link = url.split("//")[1].split("/")[0];
        return "http://"+link+"/favicon.ico";
    }
});

Template.website_detail.helpers({
    
});

function getVotedStatus(object) {
    if (Meteor.user()){
        var userId = Meteor.user()._id;
        if ($.inArray(userId, object.upvotes) != -1 && $.inArray(userId, object.downvotes) == -1){
            $('#downvote-' + object._id).addClass('transparant');
            $('#upvote-' + object._id).removeClass('transparant');
        } else if ($.inArray(userId, object.upvotes) == -1 && $.inArray(userId, object.downvotes) != -1) {
            $('#upvote-' + object._id).addClass('transparant');
            $('#downvote-' + object._id).removeClass('transparant');
        } else {
            $('#upvote-' + object._id).removeClass('transparant');
            $('#downvote-' + object._id).removeClass('transparant');
        }
    }
}