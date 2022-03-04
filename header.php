<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?php if (!is_home()) : ?>
            <?php single_post_title(); ?> | <?= get_bloginfo("name"); ?>
        <?php else : ?>
            <?php bloginfo("name") ?>
        <?php endif; ?>
    </title>

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
    <div id="app">
        <header>
            <!-- Site header -->
        </header>
        <main>