<template>
    <nav class="w-full grid grid-cols-3 gap-4 items-center p-4 pb-5">
        <img src="/public/images/logo_transparent.png" class="max-w-[80px]" alt="logo.png">
        <ul class="flex gap-x-3 justify-self-center">
            <li>
                <a href="/" class="hover:underline hover:decoration-2">Home</a>
            </li>
            <li>
                <a href="/new-article" class="hover:underline hover:decoration-2">New</a>
            </li>
        </ul>
        <div class="flex gap-x-3 justify-self-end">
            <a href="/" class="hover:underline hover:decoration-2">Login</a>
            <a href="/" class="hover:underline hover:decoration-2">Register</a>
        </div>
    </nav>
</template>

<style>
    a:hover {
        text-decoration-color: #BD3246;
    }

</style>