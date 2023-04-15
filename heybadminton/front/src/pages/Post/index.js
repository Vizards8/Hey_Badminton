import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Avatar, Form, Input, Button, List } from "antd";
import MyBreadcrumb from "@/common/MyBreadcrumb";
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
    pictures: [
      {
        imageUrl: "https://picsum.photos/400?random=1",
        caption: "Picture 1",
      },
      {
        imageUrl: "https://picsum.photos/400?random=2",
        caption: "Picture 2",
      },
    ],
  },
  comment: [
    {
      text: "Wonderful post!",
      author: {
        name: "David",
        avatarUrl: "https://picsum.photos/50?random=2",
      },
    },
    {
      text: "Wonderful post!",
      author: {
        name: "Steve",
        avatarUrl: "https://picsum.photos/50?random=3",
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
      <MyBreadcrumb paths={["post"]} />
      <Card style={{ marginBottom: "20px" }}>
        <Meta
          avatar={<Avatar src={post.author.avatarUrl} />}
          title={post.title}
        />
        <p style={{ marginTop: "20px" }}>{post.content}</p>
        {post.pictures &&
          post.pictures.map((picture) => (
            <div key={picture.imageUrl} style={{ marginTop: "20px" }}>
              <img src={picture.imageUrl} alt="picture" />
            </div>
          ))}
      </Card>
      <List
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
