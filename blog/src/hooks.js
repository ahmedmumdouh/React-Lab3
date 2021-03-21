import { useEffect, useState } from "react";

export function usePosts() {
  const [postState, setState] = useState({
    posts: [{ id: 1, userId: 1, title: "test-title", body: "test-body" }],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setState({ ...postState, posts: json });
        setLoading(false);
      });
  }, [postState]);

  return {
    loading,
    postState,
  };
}

export function useCreators() {
  const [creatorState, setCreator] = useState({
    creators: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setCreator({ ...creatorState, creators: json });
        setLoading(false);
      });
  }, [creatorState]);

  return {
    loading,
    creatorState,
  };
}
