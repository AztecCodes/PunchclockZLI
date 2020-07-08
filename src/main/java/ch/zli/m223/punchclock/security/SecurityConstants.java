package ch.zli.m223.punchclock.security;

/**
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc Sicherheitskonstanten
 */

public class SecurityConstants {
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/users/sign-up";
    public static final String LOG_IN_URL = "/login.html";
    public static final String FAVICON_URL = "/*.ico";
    public static final String LOGIN_JS_URL = "/login.js";
    public static final String SCRIPT_JS_URL = "/script.js";
    public static final String CSS_URL = "/*.css";



}