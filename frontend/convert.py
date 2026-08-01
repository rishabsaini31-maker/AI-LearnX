import json

with open('/Users/rishab/.gemini/antigravity-ide/brain/49aa58e1-4a9a-483e-9a34-e967f2481db3/.system_generated/steps/53/content.md', 'r') as f:
    content = f.read()

# Extract from <body> to </body>
import re
match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
if not match:
    print("Body not found")
    exit(1)

body_html = match.group(1)

# Remove script tags
body_html = re.sub(r'<script.*?</script>', '', body_html, flags=re.DOTALL)

# Convert class to className
body_html = body_html.replace('class=', 'className=')

# Self-close img, input, br
body_html = re.sub(r'<img([^>]*[^/])>', r'<img\1/>', body_html)
body_html = re.sub(r'<input([^>]*[^/])>', r'<input\1/>', body_html)
body_html = re.sub(r'<br>', r'<br/>', body_html)
body_html = re.sub(r'<!--.*?-->', '', body_html, flags=re.DOTALL)

# Inline style conversion for the timeline and background-image
# e.g., style="background-image: url('...')"
def style_replacer(m):
    style_str = m.group(1)
    # Simple conversion for background-image
    if 'background-image' in style_str:
        url_match = re.search(r"url\('([^']+)'\)", style_str)
        if url_match:
            return "style={{ backgroundImage: `url('${url_match.group(1)}')` }}"
    
    return m.group(0)

body_html = re.sub(r'style="([^"]+)"', style_replacer, body_html)

# Add ScrollVideoScrub at the top
jsx = f"""import React from 'react'
import Link from 'next/link'
import {{ ScrollVideoScrub }} from '@/components/home/scroll-video-scrub'

export default function Home() {{
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <ScrollVideoScrub src="/hero-video.mp4" />
      {{/* Below is the Stitch UI */}}
      {body_html}
    </div>
  )
}}
"""

with open('/Users/rishab/Desktop/AI LearnX/src/app/page.tsx', 'w') as f:
    f.write(jsx)

print("Converted Home UI")
