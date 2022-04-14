package com.boyonglab.ecommerce.auth;

public class TokenDao {
    private String token;

    TokenDao(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
