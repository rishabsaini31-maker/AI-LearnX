import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

target = r'(</section>\s*<section className="py-16 px-gutter max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2 className="font-headline-lg text-headline-lg mb-6">Simple, Value-Driven Pricing</h2>)'
replacement = r'''</section>

<SuccessStories />
<Comparison />
<WhatYouGet />

<section className="py-16 px-gutter max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-6">Simple, Value-Driven Pricing</h2>'''

content = re.sub(target, replacement, content)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Updated page.tsx")
