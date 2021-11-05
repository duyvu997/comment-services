# comment-services

This is a service that handles some of the features of a post.

### Testing

- cool start 30s for first time.

  - GET https://vduy-comment-service.herokuapp.com/api/v1/posts/{postId}/comments
  - POST https://vduy-comment-service.herokuapp.com/api/v1/posts/{postId}/comments

    with body:
    {
    "userId": "1 -> 50",
    "commentContent": "this is a first comment."
    }
