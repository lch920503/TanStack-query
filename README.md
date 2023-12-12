# Tanstack Query

ajax

- 비동기 자바스크립트 통신
- 서버에서 정보를 가져올 때 쓰는 것

HTTP (HyperText Transfer Protocl)

- 단점: 단방향 통신  
  request, response 의 옵션과 같은 개념

메서드

- get
- post
- put
- delete

어떻게?
REST(징검다리)
REST API

- REST를 기반으로 서비스 API를 구현

RESTful API

- 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것
- 이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것

* react-query  
  useQuery(HTTP 프로토콜 메서드: GET)  
  useMutation(HTTP 프로토콜 메서드: PATCH, PUT, DELETE)

### useQuery

```jsx
const {
  data: userData,
  isLoading,
  status,
} = useQuery({
  queryKey: [QueryKeys.USER],
  queryFn: getUserInfoFetch,
});
```

### useMutation

```jsx
const { mutate: postMutate } = useMutation({
  mutationFn: (data) => postPostsInfoFetch(data),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.POST],
      refetchType: "active",
    });
  },
  onError: () => {
    console.error("error");
  },
});
```

- stealTime (기본값: 0, 정적데이터 -> 쓰레기통)  
  데이터가 fresh -> stale 상태로 변경되는데 걸리는 시간  
  staleTime이 지나지 않았다면 unmount 후 mount 되어도 fetch 가 일어나지 않음

- cacheTime (기본값 : 5 _ 1000 _ 60, 5분 대기 -> 쓰레기통)  
  데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간
