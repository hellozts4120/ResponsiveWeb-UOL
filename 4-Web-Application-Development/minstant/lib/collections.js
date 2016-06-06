Chats = new Mongo.Collection("chats");

Chats.allow({
    insert: function(userId, doc) {
		if (Meteor.user()) {
			if (doc.user1Id && doc.user1Id == userId && doc.user2Id) {
                console.log("Insert chat!");
                return true;
            }
            else {
                return false;
            }
		} 
        else {
			return false;
		}
	},
    
    update: function(userId, doc) {
		if (Meteor.user()) {
			if (doc.user1Id && doc.user2Id && (doc.user1Id == userId || doc.user2Id == userId)) {
                console.log("Update chat!");
                return true;
            }
            else {
                return false;
            }
		} 
        else {
			return false;
		}
	}
});