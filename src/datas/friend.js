let friends = [
    {
      name: "김**",
      id: 1995,
      img_url: ""
    },
    {
      name: "조**",
      id: 2000,
      img_url: ""
    },
    {
      name: "박**",
      id: 2003,
      img_url: ""
    },
    {
      name: "이**",
      id: 1997,
      img_url: ""
    },
    {
      name: "최**",
      id: 1998,
      img_url: ""
    }
  ];
  
  export function getFriends() {
    return friends;
  }
  
  export function getFriend(number) {
    return friends.find(
        friends => friends.id === id
    );
  }