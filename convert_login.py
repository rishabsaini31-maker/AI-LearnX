import urllib.request
import re
import os

url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1N2Q1NzQ3NGMzY2IwNzc5YmI4NjE2Mjg3MmNhEgsSBxCyoPqY2gMYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzUyMzY3MjQ4MTg5MjA0Njky&filename=&opi=89354086"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    content = response.read().decode('utf-8')

# Extract from <body> to </body>
match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
if not match:
    print("Body not found")
    exit(1)

body_html = match.group(1)

# Remove script tags
body_html = re.sub(r'<script.*?</script>', '', body_html, flags=re.DOTALL)

# Convert class to className
body_html = body_html.replace('class=', 'className=')

# Self-close tags
body_html = re.sub(r'<img([^>]*[^/])>', r'<img\1/>', body_html)
body_html = re.sub(r'<input([^>]*[^/])>', r'<input\1/>', body_html)
body_html = re.sub(r'<br>', r'<br/>', body_html)
body_html = re.sub(r'<!--.*?-->', '', body_html, flags=re.DOTALL)

# Inline style conversion
def style_replacer(m):
    style_str = m.group(1)
    if 'background-image' in style_str:
        url_match = re.search(r"url\('([^']+)'\)", style_str)
        if url_match:
            return "style={{ backgroundImage: `url('${url_match.group(1)}')` }}"
    return m.group(0)

body_html = re.sub(r'style="([^"]+)"', style_replacer, body_html)

jsx = f"""import React from 'react'
import Link from 'next/link'

export default function Login() {{
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {body_html}
    </div>
  )
}}
"""

os.makedirs('/Users/rishab/Desktop/AI LearnX/src/app/login', exist_ok=True)
with open('/Users/rishab/Desktop/AI LearnX/src/app/login/page.tsx', 'w') as f:
    f.write(jsx)

print("Converted Login UI")
