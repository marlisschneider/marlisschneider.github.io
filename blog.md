---
layout: default
title: Blog
---

<h1>{{ page.title }}</h1>

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})</li>
  {% endfor %}
</ul>