package com.heybadminton;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.sql.Timestamp;
import java.util.List;

import com.heybadminton.App;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.heybadminton.dao.CommentMapper;
import com.heybadminton.entity.Comment;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
public class CommentMapperTest {

    @Autowired
    private CommentMapper commentMapper;

    @Test
    public void testGetById() {
        Comment comment = commentMapper.getById(1L);
        assertNotNull(comment);
        assertEquals(1L, comment.getId().longValue());
        assertEquals(1L, comment.getPostId().longValue());
        assertEquals(1L, comment.getCommentUserId().longValue());
        assertEquals("This is a comment", comment.getContent());
        assertNotNull(comment.getCreateTime());
        assertEquals(false, comment.isDelete());
    }

    @Test
    public void testGetByPostId() {
        List<Comment> comments = commentMapper.getByPostId(1L);
        assertNotNull(comments);
        assertEquals(1, comments.size());
    }

    @Test
    public void testGetByCommentUserId() {
        List<Comment> comments = commentMapper.getByCommentUserId(1L);
        assertNotNull(comments);
        assertEquals(1, comments.size());
    }

    @Test
    public void testGetAll() {
        List<Comment> comments = commentMapper.getAll();
        assertNotNull(comments);
    }

    @Test
    public void testInsert() {
        Comment comment = new Comment();
        comment.setPostId(2L);
        comment.setCommentUserId(2L);
        comment.setContent("This is a new comment");
        comment.setCreateTime(new Timestamp(System.currentTimeMillis()));
        comment.setDelete(false);

        int result = commentMapper.insert(comment);
        assertEquals(1, result);
    }

    @Test
    public void testUpdate() {
        Comment comment = commentMapper.getById(3L);
        comment.setContent("Updated comment content");

        int result = commentMapper.update(comment);
        assertEquals(1, result);

        comment = commentMapper.getById(3L);
        assertEquals("Updated comment content", comment.getContent());
    }

    @Test
    public void testDelete() {
        int result = commentMapper.delete(3L);
        assertEquals(1, result);

        Comment comment = commentMapper.getById(3L);
        assertEquals(true, comment.isDelete());
    }
}
