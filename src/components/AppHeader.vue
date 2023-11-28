<template>
    <nav class="max-w-[1200px] mx-auto grid grid-cols-3 gap-4 items-center p-4 pb-5">
        <a href="/">
            <img src="/public/images/logo_transparent.png" class="w-[120px]" alt="logo.png">
        </a>
        <ul class="flex gap-x-3 justify-self-center">
            <li>
                <a href="/" class="text-xl hover:underline hover:decoration-2">Home</a>
            </li>
            <li>
                <a href="/new-article" class="text-xl hover:underline hover:decoration-2">New</a>
            </li>
        </ul>
    </nav>
</template>

<style>
    li a:hover {
        text-decoration-color: #BD3246;
    }

    nav a:first-child {
        max-width: 120px;
    }

</style>