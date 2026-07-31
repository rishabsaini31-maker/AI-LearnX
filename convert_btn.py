import os
import re

files = [
    '/Users/rishab/Desktop/AI LearnX/src/app/login/page.tsx',
    '/Users/rishab/Desktop/AI LearnX/src/app/sign-up/page.tsx',
    '/Users/rishab/Desktop/AI LearnX/src/app/signup/page.tsx'
]

old_class = r'bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary shadow-\[0_0_20px_rgba\(0,69,143,0\.4\)\]'
new_class = r'bg-black hover:bg-gray-900 shadow-md'

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            content = f.read()
        
        content = re.sub(old_class, new_class, content)
        
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Updated {file_path}")
