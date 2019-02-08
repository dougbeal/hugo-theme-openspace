
This is the best tutorial how to create static "landing pages" on Hugo: https://discuss.gohugo.io/t/creating-static-content-that-uses-partials/265/19?u=royston

Basically, you create .md in /content/ with type: "page" in front matter, then create custom layout for it, for example layout: "simple-static" in front matter, then create the layout template in themes/<name>/layouts/page/, for example, simple-static.html. Then, use all partials as usual, and call content from original .md file using {{ .Content }}.

All my static (landing) pages are using this method.

By the way, I'm not using hugo new, I just clone .md file or copy a template into /content/ and open it using my iA Writer text editor. But I'm not using Hugo server either, adapted npm-build-boilerplate is running the server and builds.


## Based on [Hugo Bootstrap v4 Blog](https://github.com/alanorth/hugo-theme-bootstrap4-blog) by [Alan Orth](https://github.com/alanorth)
## License
This repository contains SASS and HTML code from the [Bootstrap](https://getbootstrap.com) project, which is licensed under the [MIT license](https://tldrlegal.com/license/mit-license) and [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), and [Font Awesome](https://fontawesome.com/), which uses [various licenses](https://fontawesome.com/license/).
