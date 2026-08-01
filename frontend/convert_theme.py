import os
import re

files_to_modify = [
    '/Users/rishab/Desktop/AI LearnX/src/app/login/page.tsx',
    '/Users/rishab/Desktop/AI LearnX/src/app/sign-up/page.tsx',
    '/Users/rishab/Desktop/AI LearnX/src/app/signup/page.tsx'
]

replacements = [
    (r'bg-\[\#030712\] overflow-hidden text-white', r'bg-white overflow-hidden text-gray-900'),
    (r'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70', r'text-gray-900'),
    (r'text-white/60', r'text-gray-600'),
    (r'bg-white/\[0\.03\] backdrop-blur-2xl rounded-3xl p-8 transition-all duration-300 shadow-\[0_0_40px_rgba\(0,0,0,0\.5\)\] border border-white/\[0\.08\]', r'bg-white rounded-3xl p-8 transition-all duration-300 shadow-xl border border-gray-100'),
    (r'from-primary/30 to-secondary/30', r'from-primary/10 to-secondary/10'),
    (r'text-white/70', r'text-gray-700'),
    (r'text-white/40', r'text-gray-400'),
    (r'bg-black/40 border border-white/10 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-black/60 transition-all outline-none text-white placeholder:text-white/30 text-sm font-medium shadow-inner', r'bg-gray-50 border border-gray-200 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-white transition-all outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium'),
    (r'hover:text-white', r'hover:text-gray-900'),
    (r'border-white/10', r'border-gray-200'),
    (r'bg-white/5 hover:bg-white/10', r'bg-white hover:bg-gray-50 text-gray-700'),
    (r"text-white hover:text-primary font-bold hover:underline", r"text-gray-900 hover:text-primary font-bold hover:underline")
]

for file_path in files_to_modify:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = re.sub(old, new, content)
        
    with open(file_path, 'w') as f:
        f.write(content)
    print(f"Updated {file_path}")
