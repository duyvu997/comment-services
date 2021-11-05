/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL NOT NULL,
  userId VARCHAR (255),
  postId VARCHAR (255),
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY (id)
)