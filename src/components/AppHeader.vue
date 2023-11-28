<template>
    <nav class="fixed top-0 left-0 w-full grid grid-cols-3 gap-4 items-center p-4">
        <img src="/public/images/logo_transparent.png" class="max-w-[80px]" alt="logo.png">
        <ul class="flex gap-x-2 justify-self-center">
            <li>
                <a href="/" class="hover:underline hover:decoration-2">Home</a>
            </li>
            <li>
                <a href="/articles" class="hover:underline hover:decoration-2">Articles</a>
            </li>
        </ul>
        <div class="flex gap-x-2 justify-self-end">
            <a href="/" class="hover:underline hover:decoration-2">login</a>
            <a href="/" class="hover:underline hover:decoration-2">register</a>
        </div>
    </nav>
</template>

<style>
    a:hover {
        text-decoration-color: #BD3246;
    }

</style>