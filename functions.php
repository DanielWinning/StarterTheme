<?php

if (!function_exists("startpress_theme_setup")) {
    function startpress_theme_setup()
    {
        /*
         * Add theme support for basic features
         */
        add_theme_support("title-tag");
        add_theme_support("automatic-feed-links");
        add_theme_support("post-thumbnails");
        add_theme_support("html5", [
            "comment-list",
            "comment-form",
            "search-form",
            "gallery",
            "caption"
        ]);
        add_theme_support("post-formats", [
            "aside",
            "gallery",
            "link",
            "image",
            "quote",
            "status",
            "video",
            "audio",
            "chat"
        ]);

        /*
         * Register navigation menus
         */
        register_nav_menus([
            "primary" => __("Primary", "startpress"),
            "secondary" => __("Secondary", "startpress")
        ]);
    }
    add_action("after_setup_theme", "startpress_theme_setup");
}

if (!function_exists("startpress_theme_scripts")) {
    function startpress_theme_scripts()
    {
        /*
         * Enqueue styles
         */
        wp_enqueue_style("theme-style", get_template_directory_uri() . "/assets/css/theme.css");

        /*
         * Enqueue scripts
         */
        wp_enqueue_script("theme-script", get_template_directory_uri() . "/assets/js/theme.js", "1.0.0", true, true);
    }
    add_action("wp_enqueue_scripts", "startpress_theme_scripts");
}