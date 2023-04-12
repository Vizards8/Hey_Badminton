import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Avatar, Form, Input, Button, List } from "antd";
import "./Post.css";

const { Meta } = Card;
const { TextArea } = Input;

const data = {
  post: {
    title: "Topic 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur.",
    author: {
      name: "Admin",
      avatarUrl: "https://picsum.photos/50?random=1",
    },
  },
  comment: [
    {
      text: "Wonderful post!",
      author: {
        name: "Admin",
        avatarUrl: "https://picsum.photos/50?random=2",
      },
    },
  ],
};

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(data.post);
  const [comments, setComments] = useState(data.comment);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    // Fetch the post data from your backend API
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));

    // Fetch the comments for this post from your backend API
    fetch(`/api/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleCommentSubmit = () => {
    // Submit the new comment to your backend API
    fetch(`/api/posts/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: commentText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setCommentText("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="post-wrapper">
      {post && (
        <Card style={{ marginBottom: "20px" }}>
          <Meta
            avatar={<Avatar src={post.author.avatarUrl} />}
            title={post.title}
          />
          <p style={{ marginTop: "20px" }}>{post.content}</p>
        </Card>
      )}
      <List
        className="comment-list"
        header={`${comments.length} replies`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatarUrl} />}
              title={item.author.name}
              description={item.text}
            />
          </List.Item>
        )}
      />
      <Form>
        <Form.Item>
          <TextArea
            rows={4}
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            onClick={handleCommentSubmit}
            type="primary"
          >
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Post;
