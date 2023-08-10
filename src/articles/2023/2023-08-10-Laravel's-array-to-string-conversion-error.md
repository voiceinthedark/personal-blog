---
title: Laravel's-array-to-string-conversion-error
published_at: 2023-08-10T13:47:00.998Z
updated_at: 2023-08-10T14:24:44.343Z
type: article
description: Solving the array to string conversion error when dealing with laravel custom middleware
link: /2023/Laravel's-array-to-string-conversion-error.md
image: images/image.png
tags: [laravel, middleware, routing]
---

<ArticleHeader :frontmatter="$frontmatter" />

Applying custom middleware for your application routing, might sometimes lead to undesirables hurdles along the road, that causes many bugs and errors and plenty of **headaches** :exploding_head:

One such problem when dealing with custom middlewares is the **array to string conversion** error.

## The problem
In my case, I wanted to apply a middleware to filter users by role.
So I ended up making a custom middleware:
`php artisan make:middleware CheckUserRole`

**CheckUserRole.php**{title="CheckUserRole.php"}
```php
public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!$request->user() || $request->user()->role != $role) { //[!code hl]
            return redirect('login');
        }

        return $next($request);
    }
```

After creating the middleware I registered to my `kernel.php` $routeMiddleware:

**Kernel.php**{title="Kernel.php"}
```php
protected $routeMiddleware = [
            'role' =>  [\App\Http\Middleware\CheckUserRole::class,],
        ];
```

And then I applied it to my routes through a group routing:

**routes/web.php**{title="routes/web.php"}
```php
Route::group(['middleware' => ['role:admin']], function () {
    Route::get('/tasks/admin/dashboard', function () {
        return view('admin.dashboard');
    })->name('admin.dashboard');
});
```

## A simple oversight and a solution

Searching for solution online will lead you to [routing closures](https://laracasts.com/discuss/channels/laravel/array-to-string-conversion-at-routefileregistrarphp35). Or to some [grouping and prefixing error](https://stackoverflow.com/questions/69391492/array-to-string-conversion-when-trying-to-apply-auth-middleware).

In my case none of that worked.
My problem was in fact a slight oversight when registering the middleware.

**Kernel.php**{title="Kernel.php"}
```php
protected $routeMiddleware = [
            'role' =>  [\App\Http\Middleware\CheckUserRole::class,]; //[!code --]
            'role' =>  \App\Http\Middleware\CheckUserRole::class, //[!code ++]
        ];
```

My error was registering my middleware inside the `$routeMiddleware` in a sub array.
Removing the sub array, solved the problem.

Hope this helps, until next time. 🐺


<script setup>
    import ArticleHeader from '../../components/Article/ArticleHeader.vue'
</script>

<style scoped>
    strong[title] {
        position: relative;
        z-index: 10;
        top: 30px;
        left: -30px;
        display: inline-block;        
        background-color: #127f22;
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
    }
    strong[title]:hover {
        cursor: pointer;
        transform: scale(1.1) translateY(-5px);
        transition: all 0.3s ease-in-out;
    }
</style>