INSERT INTO comments (postId, userId, content, created_at, updated_at) VALUES ($1, $2, $3, now(), now()) RETURNING isd
