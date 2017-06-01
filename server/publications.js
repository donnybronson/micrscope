Meteor.publish('posts', function(){
  return Posts.find({'designer' : 'simon J'});
}
);
