if (Posts.find().count() === 0){
  Posts.insert({
    title: 'Pocket Jockey',
    designer: 'simon J',
    url: 'http://s-j.io/pj'
  });
  Posts.insert({
    title: 'bowie Hip Sync',
    designer: "Simon J",
    url: 'http://s-j.io/bowie'
  });
  Posts.insert({
    title: 'Hive Mind',
    designer: 'Free Ice Cream',
    url: 'https://www.odi.org/comment/10503-why-we-gamified-sustainable-development-goals'
  });
}
