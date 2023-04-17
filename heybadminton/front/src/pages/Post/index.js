import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Avatar, Form, Input, Button, List, message } from "antd";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import { http } from "@/utils";
import { useUser } from "@/pages/DashBoard";
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
      id: 200,
      text: "Wonderful post!",
      author: {
        name: "David",
        avatarUrl: "https://picsum.photos/50?random=2",
      },
    },
    {
      id: 23,
      text: "Wonderful post!",
      author: {
        name: "Steve",
        avatarUrl: "https://picsum.photos/50?random=3",
      },
    },
  ],
};

const names = ["David", "Steve", "Mike", "Mary"];

const Post = () => {
  const { id } = useParams();
  const { user } = useUser();
  console.log(user);
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [commentText, setCommentText] = useState("");

  const getPostDetail = async () => {
    const res = await http.get(`/equipments/${id}`);
    setPost(res.data);
  };

  const getAllComments = async () => {
    const res = await http.get(`/api/comments/post/${id}`);
    setComments(res.data);
  };

  useEffect(() => {
    // Fetch the post data from your backend API
    getPostDetail();

    // Fetch the comments for this post from your backend API
    getAllComments();
  }, [id]);

  const handleCommentSubmit = async () => {
    // Submit the new comment to your backend API
    const newComment = {
      id: new Date().getTime(),
      postId: id,
      commentUserId: 1,
      content: commentText,
      postUserProfile: user.profile,
    };
    // send POST
    const res = await http.post("/api/comments", newComment);
    console.log(res);
    if (res.status === 200) {
      message.success("Comment created successfully");
      setCommentText("");
      setTimeout(() => {
        setComments([...comments, newComment]);
      }, 1000);
    }
  };

  return (
    <div className="post-wrapper">
      <MyBreadcrumb paths={["post"]} />
      {post && (
        <Card style={{ marginBottom: "20px" }}>
          <Meta
            avatar={
              post.avatarUrl ? (
                <Avatar src={post.avatarUrl} />
              ) : (
                <Avatar src={"https://picsum.photos/50?random=" + post.id} />
              )
            }
            title={post.title}
          />
          <p style={{ marginTop: "20px" }}>{post.content}</p>
          {post.picturesUrls && (
            <div key={post.id} style={{ marginTop: "20px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={post.picturesUrls}
                alt="post_picture"
              />
            </div>
          )}
        </Card>
      )}
      {comments && (
        <List
          header={`${comments.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  item.postUserProfile ? (
                    <Avatar src={item.postUserProfile} />
                  ) : (
                    <Avatar
                      src={"https://picsum.photos/50?random=" + post.id}
                    />
                  )
                }
                title={names[comments.id]}
                description={item.content}
              />
            </List.Item>
          )}
        />
      )}
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
