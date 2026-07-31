import urllib.request
import re
import os

urls = {
    'page.tsx': "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1N2Q1NzVlMDU5MzEwOTI1YzcyNDRjMTk0MmM1EgsSBxCyoPqY2gMYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzUyMzY3MjQ4MTg5MjA0Njky&filename=&opi=89354086",
    'signup/page.tsx': "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1N2Q1NzRiZjA5NzQwMWE2MzE1OTMxMmNhZmEwEgsSBxCyoPqY2gMYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzUyMzY3MjQ4MTg5MjA0Njky&filename=&opi=89354086",
    'login/page.tsx': "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1N2Q1NzQ3NGMzY2IwNzc5YmI4NjE2Mjg3MmNhEgsSBxCyoPqY2gMYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzUyMzY3MjQ4MTg5MjA0Njky&filename=&opi=89354086",
    'forgot-password/page.tsx': "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1N2Q1NzRhNTI3MTUwMWE2MmNlMzI2MTFmMWMzEgsSBxCyoPqY2gMYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzUyMzY3MjQ4MTg5MjA0Njky&filename=&opi=89354086"
}

def process_file(url, out_path, name):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8')

    match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
    if not match:
        return

    body_html = match.group(1)
    body_html = re.sub(r'<script.*?</script>', '', body_html, flags=re.DOTALL)
    body_html = body_html.replace('class=', 'className=')
    body_html = re.sub(r'<img([^>]*[^/])>', r'<img\1/>', body_html)
    body_html = re.sub(r'<input([^>]*[^/])>', r'<input\1/>', body_html)
    body_html = re.sub(r'<br>', r'<br/>', body_html)
    body_html = re.sub(r'<!--.*?-->', '', body_html, flags=re.DOTALL)

    def style_replacer(m):
        style_str = m.group(1)
        if 'background-image' in style_str:
            url_match = re.search(r"url\('([^']+)'\)", style_str)
            if url_match:
                # FIXED: properly format the string with the extracted URL
                return f"style={{{{ backgroundImage: `url('{url_match.group(1)}')` }}}}"
        return m.group(0)

    body_html = re.sub(r'style="([^"]+)"', style_replacer, body_html)

    if out_path == 'page.tsx':
        jsx = f"""import React from 'react'
import Link from 'next/link'
import {{ ScrollVideoScrub }} from '@/components/home/scroll-video-scrub'

export default function Home() {{
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <ScrollVideoScrub src="/hero-video.mp4" />
      {body_html}
    </div>
  )
}}
"""
    else:
        jsx = f"""import React from 'react'
import Link from 'next/link'

export default function {name}() {{
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {body_html}
    </div>
  )
}}
"""

    full_path = f"/Users/rishab/Desktop/AI LearnX/src/app/{out_path}"
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(jsx)

process_file(urls['page.tsx'], 'page.tsx', 'Home')
process_file(urls['signup/page.tsx'], 'signup/page.tsx', 'SignUp')
process_file(urls['login/page.tsx'], 'login/page.tsx', 'Login')
process_file(urls['forgot-password/page.tsx'], 'forgot-password/page.tsx', 'ForgotPassword')

print("All files fixed and regenerated.")
