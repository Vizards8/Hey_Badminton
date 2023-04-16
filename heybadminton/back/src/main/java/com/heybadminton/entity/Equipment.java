package com.heybadminton.entity;

import lombok.Data;
import lombok.ToString;
import java.sql.Timestamp;


@Data
@ToString
public class Equipment {
    private Long id;
    private Long post_user_id;
    private String title;
    private String content;
    private String pictures_urls;
    private Boolean is_delete;
    private Timestamp create_time;
    private Timestamp update_time;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPost_user_id() {
        return post_user_id;
    }

    public void setPost_user_id(Long post_user_id) {
        this.post_user_id = post_user_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPictures_urls() {
        return pictures_urls;
    }

    public void setPictures_urls(String pictures_urls) {
        this.pictures_urls = pictures_urls;
    }

    public Boolean getIs_delete() {
        return is_delete;
    }

    public void setIs_delete(Boolean is_delete) {
        this.is_delete = is_delete;
    }

    public Timestamp getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Timestamp create_time) {
        this.create_time = create_time;
    }

    public Timestamp getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Timestamp update_time) {
        this.update_time = update_time;
    }

}
